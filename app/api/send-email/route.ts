import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function POST(request: NextRequest) {
  try {
    const { to, subject, name, email, company, stage, message } = await request.json()

    // Validation des données
    if (!to || !subject || !name || !email) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      )
    }

    // Construction du contenu de l'email
    const emailContent = `
Nouvelle demande d'intervention d'urgence

Informations du contact:
- Nom: ${name}
- Email: ${email}
- Entreprise: ${company || 'Non renseigné'}
- Situation: ${stage || 'Non renseigné'}

Message:
${message || 'Aucun message'}

---
Envoyé depuis le site GSLV.fr
    `.trim()

    // Envoi de l'email via Resend
    if (process.env.RESEND_API_KEY) {
      const { data, error } = await resend.emails.send({
        from: 'GSLV.fr <noreply@gslv.fr>',
        to: [to],
        subject: subject,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">🚨 Nouvelle demande d'intervention d'urgence</h2>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Informations du contact:</h3>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Nom:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Entreprise:</strong> ${company || 'Non renseigné'}</li>
                <li><strong>Situation:</strong> ${stage || 'Non renseigné'}</li>
              </ul>
            </div>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #dc2626; margin-top: 0;">Message:</h3>
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
        console.error('Erreur Resend:', error)
        throw new Error('Erreur lors de l\'envoi de l\'email')
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

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
