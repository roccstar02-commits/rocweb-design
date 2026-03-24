# Rocksteady Marketing Setup

This site is ready to deploy as a static site on Netlify or Vercel.

## Contact form setup

The contact form uses Formspree so the site can stay simple to deploy without a custom backend.

1. Create a Formspree form at https://formspree.io/ if you want to use a different inbox.
2. Copy your form endpoint.
3. Open `script.js`.
4. Update the `FORMSPREE_ENDPOINT` value if you need to replace the current endpoint.
5. Test the form locally or on your deployed site.

## Update the destination email

Your notification email is managed inside Formspree.
Change the destination in your Formspree dashboard whenever needed.

The public contact email shown across the site is:
`rocwebdesignnj@gmail.com`

## Before deployment

1. Confirm the Formspree endpoint in `script.js` is the one you want to use.
2. Replace placeholder project examples or testimonial copy if needed.
3. Make sure `rocwebdesignnj@gmail.com` is the public email address you want displayed.
4. Deploy to Netlify or Vercel.
