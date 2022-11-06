export function Footer() {
  return <footer className="bg-sky-200 h-20 shadow-xxl">
    <div className="container mx-auto flex justify-between px-5 items-center h-full">
      <span className="font-sans text-lg text-white">Text Copyright {new Date().getFullYear()}</span>
      <a className="footer__link font-sans text-lg text-white" href="https://github.com/magical01/react-movies-app" target={"_blank"}>Repository</a>
    </div>
  </footer>
}