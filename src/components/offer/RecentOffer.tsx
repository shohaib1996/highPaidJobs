import { Countdown } from "../animations/countdown";
import Container from "../Container";

const RecentOffer = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  return (
    <div className="bg-foreground mb-5 md:mb-0 md:p-0">
      <Container>
        <div className="flex items-center flex-col gap-5 py-10">
          <div>
            <h2 className="text-xl md:text-4xl md:mb-5 font-bold text-black">
              Door Closes for FREE Career Auditing
            </h2>
          </div>
          <div className="flex justify-center">
            <Countdown className="text-black" targetDate={targetDate} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecentOffer;
