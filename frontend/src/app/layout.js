export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CSS via CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Optional: Customize theme (peach background, colors) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      peach: '#ffe5b4',
                      darkblue: '#001747',
                      skyblue: '#2d70fd',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-peach min-h-screen text-darkblue">
        {children}
      </body>
    </html>
  );
}
