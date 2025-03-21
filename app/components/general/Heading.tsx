interface HeadingProps {
  center?: boolean;
  text: string,
  fsBig?: boolean,
}

const Heading: React.FC<HeadingProps> = ({ center, text, fsBig }) => {
  return (
    <div className={`md:text-xl ${fsBig && "md:text-3xl md:my-5"}  text-slate-500 my-3 md:my-10 px-3 md:px-10 ${center ? "text-center" : "text-start"}`}>
      {text}
    </div>
  )
}

export default Heading

/**
 * Sayfalarda Görülecek Başlıklar buradan gelir.
 */