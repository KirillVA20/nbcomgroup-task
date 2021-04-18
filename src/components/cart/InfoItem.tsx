interface InfoItemProps {
  value: string;
}

const InfoItem = ({ value }: InfoItemProps) => {
    return (
        <div className="info-item">
            <span>{value}</span>
        </div>
    )
};

export default InfoItem;
