import { Preferences } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/preferences`;

const getPreferences= async (): Promise<Preferences[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getPreferences;
