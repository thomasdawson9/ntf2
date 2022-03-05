export const SmileyFace = () => {
    const middleScale = ["bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900"]
    const topLeftScale = ["bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900"]
    const bottomRightScale = ["bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900"]
    const middleRandomColor = () => {
        return Math.floor(Math.random() * middleScale.length); 
    }
    const topLeftColor = () => {
        return Math.floor(Math.random() * topLeftScale.length); 
    }
    const bottomRightColor = () => {
        return Math.floor(Math.random() * bottomRightScale.length); 
    }

    return(
        <article className={`w-[25rem] h-[25rem] rounded-full ${middleScale[middleRandomColor()]}`}>
        <article className={`absolute top-0 -left-4 w-[25rem] h-[25rem] rounded-full ${topLeftScale[topLeftColor()]}`}></article>
        <article className={`absolute bottom-0 right-4 w-[25rem] h-[25rem] rounded-full ${bottomRightScale[bottomRightColor()]}`}></article>    
            <section>
                <div/><div/>

            </section>
            <div/>
        </article>
    )
}