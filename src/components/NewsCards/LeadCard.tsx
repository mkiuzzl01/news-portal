
interface news_data {
  id: string;
  category: string;
  description: string;
  data: string;
  news_type: string;
  published_time: string;
  image: string;
}

const LeadCard = ({ data }: { data: news_data }) => {

  console.log(data);

  return <div></div>;
};

export default LeadCard;
