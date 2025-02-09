import { createRoot } from "react-dom/client"
import App from "./App.jsx"

const root = createRoot(document.getElementById("root"))

function Page() {
    return (<App />)
}

root.render(
    <Page />
)
