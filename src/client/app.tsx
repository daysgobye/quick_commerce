import { html } from "hono/html";
import { css, cx, keyframes, Style } from 'hono/css'


export const Html = (props: { children: any, title: string }) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://unpkg.com/htmx.org@1.9.3"></script>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
/>
      <title>${props.title}</title>
    </head>
    <body>   
    
     <main class="">


        ${props.children}
        </main>

    </body>
  </html>
`

export const Page = ({ children, title }: { children: any, title: string }) => {
    return (
        <Html title={title} >
            <Style />

            {children}
        </Html>
    )
}