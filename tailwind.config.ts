import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

 const config = {
   content: ["./src/**/*.{html,js,ts,tsx,mdx}"],
   theme: {
     extend: {},
   },
   corePlugins: {
    aspectRatio: false,
  },
   plugins: [require("tailwindcss-animate"), require('@tailwindcss/aspect-ratio')],
 } satisfies Config
  


 export default withUt(config);