const textClip = (text: string) => {
    return text.length < 20 ? text : text.slice(0, 20) + "...";
    // eger textin boyu 35 den buyukse texti 35den sonra kırpıp 3 nokta ekler.
}

export default textClip

/**
 * const bol = text.split(" ");
 * return bol.length < 20 ? [...bol].join(" ") : bol.slice(0, 7).join(" ") +"...";
 * Bu yaptığım farklı bir yöntem harflerle değilde kelimelerle böler.
 */