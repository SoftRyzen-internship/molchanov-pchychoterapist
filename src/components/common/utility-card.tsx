interface UtilityCardProps {
  url: string;
  text: string;
  alt: string;
}
const UtilityCard = ({ url, text, alt }: UtilityCardProps) => {
  return (
    <div className="bg-pinkSupperLight rounded-lg flex ">
      {/* <Image src={url} /> */}
    </div>
  );
};
export default UtilityCard;
