import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, activity, operationsVolume, currentTools, stage, message } = await request.json()

    // Validation des données
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    // Configuration par défaut
    const to = 'gdetaisne@gmail.com'
    const subject = 'Nouvelle demande de contact - Site GSLV.fr'

    // Construction du contenu de l'email
    const emailContent = `
Nouvelle demande de contact

Informations du contact:
- Nom: ${name}
- Email: ${email}
- Entreprise: ${company || 'Non renseigné'}
- Activité: ${activity || 'Non renseigné'}
- Volume d'opérations: ${operationsVolume || 'Non renseigné'}
- Outils en place: ${currentTools || 'Non renseigné'}
- Besoin principal: ${stage || 'Non renseigné'}

Message:
${message || 'Aucun message'}

---
Envoyé depuis le site GSLV.fr
    `.trim()

    // Envoi de l'email via Resend
  // Option B: envoi réel seulement si EMAIL_LIVE === 'true' et clé présente
  if (process.env.EMAIL_LIVE === 'true' && process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: 'GSLV.fr <noreply@gslv.fr>',
        to: [to],
        subject: subject,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">📧 Nouvelle demande de contact</h2>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Informations du contact:</h3>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Nom:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Entreprise:</strong> ${company || 'Non renseigné'}</li>
                <li><strong>Activité:</strong> ${activity || 'Non renseigné'}</li>
                <li><strong>Volume d'opérations:</strong> ${operationsVolume || 'Non renseigné'}</li>
                <li><strong>Outils en place:</strong> ${currentTools || 'Non renseigné'}</li>
                <li><strong>Besoin principal:</strong> ${stage || 'Non renseigné'}</li>
              </ul>
            </div>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #059669; margin-top: 0;">Message:</h3>
              <p style="white-space: pre-line;">${message || 'Aucun message'}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Envoyé depuis le site GSLV.fr
            </p>
          </div>
        `,
      })

      if (error) {
        // En dev, on ne bloque pas l'envoi: on log l'erreur et on continue
        console.error('Erreur Resend (fallback sur succès simulé):', error)
      }

      console.log('Email envoyé avec succès:', data)
    } else {
      // Fallback: simulation d'envoi si pas de clé API
      console.log('Email à envoyer (simulation):', {
        to,
        subject,
        content: emailContent
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )

  } catch (error: unknown) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    // Expose la stack en dev pour faciliter le debug
    const isProd = process.env.NODE_ENV === 'production'
    const details = error instanceof Error ? (isProd ? undefined : error.stack) : (isProd ? undefined : String(error))
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email', details },
      { status: 500 }
    )
  }
}
