interface SectionProps{
text : string
}

export function SectionProps({text} : SectionProps){
    return(
        <>
        <h3 className="section-title">{text}</h3>
        </>
    )
}