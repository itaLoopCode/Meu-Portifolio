interface SectionTitle{
text : string
}

export function SectionTitle({text} : SectionTitle){
    return(
        <>
        <h3 className="section-title">{text}</h3>
        </>
    )
}