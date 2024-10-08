import Tag from "@/components/tag";

type TagRowProps = {
  label: string;
  data: Array<string>;
};

const TagRow = ({ label, data }: TagRowProps) => {
  return (
    <div className="flex space-x-2 pt-2 items-start">
      <div className="flex w-full items-end max-w-28 justify-start">
        <p className="text-sm text-muted-foreground flex-nowrap pr-1">
          {label}
        </p>
        <p className="text-sm text-muted-foreground max-w-28 w-full flex-nowrap border-b-2 border-dotted border"></p>
      </div>
      <div className="flex flex-wrap w-full">
        {data.map((info, index) => (
          <div key={index} className="pt-1 pr-1">
            <Tag title={info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagRow;
