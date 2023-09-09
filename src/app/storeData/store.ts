import { create } from 'zustand';

interface Item {
    title: string;
    price: number;
    image: string;
  }
  
  interface StoreTypes {
    itemList: Item[];
    isChecked: boolean;
    addList: (title: string, price: number, image: string) => void;
    changeIsChecked: () => void;
  }



  const useStore = create<StoreTypes>((set) => ({
    itemList: [],
    isChecked: false, // Provide an initial value if needed
    addList: (title, price, image) =>
      set((state) => ({
        itemList: [
          ...state.itemList,
          {
            title,
            price,
            image,
          },
        ],
      })),
    changeIsChecked: () =>
       set((state) => ({
          isChecked : !state.isChecked,
        }))
  }));
  
  export default useStore;

// export const storeDataObject = create<storeTypes>((set)=>({
//   ischecked: false,
//   itemList : [{ title: "", price: 0, image: "" }],
//   addList : ( title , price, image) =>{ 
//      const data = {
//         title : title,
//         price : price,
//         image : image,
//      }
//     set((state) => ({ ...state, ischecked:false, itemList : [ ...state.itemList, data, ] }) )
// }
// }))