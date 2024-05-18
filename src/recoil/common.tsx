import { atom } from "recoil";
export const userInfo = atom({
  key: "user", //고유값이어야함
  default: {
    name: "",
    email: "",
    imgUrl: "",
  },
});

export const ImageIndex = atom({
  key: "imageIndex", // Unique key for the atom
  default: 0, // Initial value of the imageUrl state
});
export const ProjectId = atom({
  key: "projectId", // Unique key for the atom
  default: 0, // Initial value of the imageUrl state
});

export const OriginalImages = atom({
  key: "original",
  default: [],
});
{
  /* 문법 :
const [age,setTest] = useRecoilState(TestAtom)

setter만 필요하면:
const setTest = useSetRecoilState(TestAtom)

값만 필요하면:
const setTest = useRecoilValue(TestAtom) 
*/
}
