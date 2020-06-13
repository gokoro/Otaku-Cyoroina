const ClickListener = props => {
    const handleClick = () => {
        props.exFn()
    }
    return (
        <div onClick={handleClick} >
            {props.children}
        </div>
    )
}
export default ClickListener