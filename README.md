# RocWeb Design Setup

This site is ready to deploy as a static site on Netlify or Vercel.

## Contact form setup

The consultation form uses Formspree because it works well for a simple small-business site without adding a custom backend.

1. Create a Formspree form at https://formspree.io/.
2. Copy your form endpoint.
3. Open `script.js`.
4. Replace:
   `https://formspree.io/f/YOUR_FORM_ID`
   with your real Formspree endpoint.
5. Test the form locally or on your deployed site.

## Update the destination email

Your notification email is managed inside Formspree.
Change the email destination in your Formspree dashboard whenever needed.

## Before deployment

1. Make sure the Formspree endpoint in `script.js` is updated.
2. Replace placeholder project examples or testimonial copy if needed.
3. Confirm `hello@rocwebdesign.com` is the email address you want to show publicly.
4. Deploy to Netlify or Vercel.
