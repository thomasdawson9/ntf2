export const SmileyFace = () => {
    const scale = ["bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900"]
    const randomColor = () => {
        return Math.floor(Math.random() * scale.length); 
    }

    return(
        <article className={`w-[25rem] h-[25rem] rounded-full ${scale[randomColor()]}`}>
            <section>
                <div/><div/>

            </section>
            <div/>
        </article>
    )
}