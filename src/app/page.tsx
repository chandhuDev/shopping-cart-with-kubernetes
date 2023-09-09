import useStore from './storeData/store';
import HeaderPage from './components/HeaderPage';
import ProductPage from './components/ProductPage';

export default async function Home() {
  // try {
  //   const dataResult = await fetch("http://localhost:3000/api/getdata",{ 
  //     cache: "no-store",
  //   });
    
  //   if (!dataResult.ok) {
  //     console.log(dataResult.status)
  //     throw new Error('API request failed');
      
  //   }
  //    const data = await dataResult.json();
  //    console.log(data)
  //  } catch (error) {
  //   console.error('Error fetching data:', error);
  // }
   
return (
    <main className="w-full bg-slate-200 h-full font-sans">
     <HeaderPage />
     <ProductPage />
    </main>
  )
}
