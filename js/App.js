const App = () => {
    const App = document.createElement("div")
   
    App.setAttribute("class", "App")
    App.append(fetchIntel())
    
    return App
}
export default App