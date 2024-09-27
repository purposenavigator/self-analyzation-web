import HeaderFooter from '@/components/HeaderFooter';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <HeaderFooter>
      <div className="flex flex-1">
        <Layout />
      </div>
    </HeaderFooter>
  );
}
