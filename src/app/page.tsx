
import HeaderPage from './components/HeaderPage';
import ProductPage from './components/ProductPage';

export default async function Home() {

   
return (
    <main className="w-full bg-slate-100 h-full font-sans">
     <HeaderPage />
     <ProductPage />
    </main>
  )
}
