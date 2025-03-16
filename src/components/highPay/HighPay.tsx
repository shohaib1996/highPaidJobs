import CareerTracksComponent from "./CareerTracksComponent";
import CareerStepsComponent from "./CareerStepsComponent";
import Container from "../Container";
import BookFreeConsultation from "./BookFreeConsultation";

const HighPay = () => {
  return (
    <div className="px-4 py-5 lg:py-12 bg-foreground">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-3xl md:text-4xl font-bold text-black">
            Your path to a High-Paying career
          </h1>
          <p className="text-black">
            Follow our proven step-by-step process to land your dream job
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Career path steps */}
          <CareerStepsComponent />

          {/* Right column - Available career tracks */}
          <CareerTracksComponent />

          <div className="hidden col-span-2 md:flex items-center justify-center lg:mt-10">
            <BookFreeConsultation />
          </div>

          <div className="flex md:hidden items-center justify-center">
            <BookFreeConsultation />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HighPay;
