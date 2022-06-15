type TextAlignProps = {
    align: "left" | "center" | "right",
    children: React.ReactNode
}

const TextAlign = ({ align, children }: TextAlignProps) => {
    return (
        <div style={{ textAlign: align, margin: 0, padding: 0 }}>
            {children}
        </div>
    )
}

export default TextAlign