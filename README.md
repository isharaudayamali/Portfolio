# Dark minimal
> Highly customizable and performant portfolio template built with React, Vite, and Tailwind CSS.

<img width="1920" height="1080" alt="react-portfolio" src="https://github.com/user-attachments/assets/0df80067-5fe2-4c24-90c4-4eb28e1a7508" />

![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

[Demo](https://darkminimal.vercel.app) | [ReactBits Showcase](https://www.reactbits.dev/showcase)

## **Features**
- **Blazing fast performance** powered by Vite and React
- **Beautifully styled** with Tailwind CSS
- **Spotify integration** for showcasing your favorite album
- **Working contact form** powered by Formspree
- **Interactive UI** including the `<LetterGlitch />` component from [ReactBits.dev](https://www.reactbits.dev/)

## **Stack**  
### **Frontend**  
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

### **Tools**  
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
![Canva](https://img.shields.io/badge/Canva-c900c3?logo=canva&logoColor=white)

## **Configuration Guides**

### **Show your favorite Spotify album (or your own)** ![Spotify](https://img.shields.io/badge/Spotify-06cc1a?logo=spotify&logoColor=white)
1. Choose your Spotify album
2. Access the share options
3. Select 'copy embed code'
```html
<iframe src="https://open.spotify.com/embed/album/YOUR_ALBUM_ID_HERE" style="border-radius:12px border:0;" class="w-full h-40" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
```
4. Insert the embed code in `src/components/footer.jsx`

### **Set up contact form (Formspree)** ![Formspree](https://img.shields.io/badge/Formspree-E21A28?logo=formspree&logoColor=white)
1. Create an account on [Formspree](https://formspree.io/)
2. Create a new project/form and copy your form endpoint URL (it looks like `https://formspree.io/f/your_id`)
3. Open the `src/components/contact.jsx` file
4. Replace the `action` attribute in the `<form>` tag with your endpoint URL:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST">
```

## **Customization Checklist**
Before deploying your own instance, make sure to update these placeholder values with your real information:
- **`index.html`**: Update `title`, metadata, canonical URL, and JSON-LD schema with your own details.
- **`src/components/home.jsx`**: Change the greeting and update the GitHub, LinkedIn, and email URLs.
- **`src/components/projects.jsx`**: Replace the generic projects with your own, including titles and links.
- **`src/components/footer.jsx`**: Update the social links, Spotify iframe, and copyright name.

## **Customization**
To make this portfolio your own, you can edit the following files:
- **Global Settings:** Update metadata and title in `index.html`.
- **Content:** Modify the text, links, and details inside the components in `src/components/`.
- **Styling:** The design uses Tailwind CSS. You can adjust the theme configuration in `tailwind.config.mjs` and custom styles if needed.

## **Project structure**
```text
public/
└── svg/
src/
├── components/
|    ├── contact.jsx
|    ├── footer.jsx
|    ├── home.jsx
|    ├── logoWall.jsx
|    ├── nav.jsx
|    └── projects.jsx
├── React/
|    ├── LetterGlitch.jsx
|    ├── LikeButton.jsx
|    └── SkillsList.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## **Local configuration** 

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm**

1. Clone the repo:  
```bash
git clone https://github.com/Gothsec/dark-minimal
```
2. Install dependencies:
```bash  
npm install
```
3. Start the development server:
```bash  
npm run dev
```

## **Deployment**
This project is built with React and Vite and can be easily deployed to Vercel, Netlify, or GitHub Pages. For the easiest setup, push your repository to GitHub and import it directly into [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).
 
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit). 
