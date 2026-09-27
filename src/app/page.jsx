import HeroBanner from '@/components/pages/HeroBanner';
import Product from '@/components/pages/Property';
import Agents from '@/components/pages/Agents';
import MapSection from '@/components/pages/MapSection';
import Partners from '@/components/pages/Partners';
import FAQ from '@/components/pages/FAQ';
import MortgageCalculator from '@/components/pages/MortgageCalculator';
import CTA from '@/components/pages/CTA';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-center bg-zinc-50 dark:bg-black">
      <HeroBanner />
      <Partners />
      <Product />
      <Agents />
      <CTA />
      <MapSection />
      <MortgageCalculator />
      <FAQ />
    </div>
  );
}
