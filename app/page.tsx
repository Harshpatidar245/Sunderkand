import sunderkandData from "./data/sunderkand.json";
import type { Doha } from "./types";
import { 
  Header, 
  Footer, 
  QuickNavigation, 
  IntroSection, 
  DohaList 
} from "./components";

export default function Home() {
  const data = sunderkandData as Doha[];
  
  return (
    <div className="min-h-screen mandala-bg">
      <Header />
      <QuickNavigation data={data} />
      <IntroSection />
      <DohaList data={data} />
      <Footer />
    </div>
  );
}
