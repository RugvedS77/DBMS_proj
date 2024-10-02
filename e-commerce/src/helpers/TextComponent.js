const TextComponent = ({text = ''}) => {
    const truncatedText = (text.split(','))[0];
    return truncatedText;
}

export default TextComponent;