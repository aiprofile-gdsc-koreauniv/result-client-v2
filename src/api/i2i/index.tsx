import { useQuery } from "@tanstack/react-query";
import API from "../../util/axios";
import firebase from "firebase/compat/app";
export const useAllProjects = () => {
  const queryFn = async (token: string) => {
    const res = await API.get("/i2i", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 200) return res.data;
    throw new Error("Failed to fetch projects");
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const token = await firebase.auth()?.currentUser?.getIdToken();
      if (!token) throw new Error("User token not available");
      return queryFn(token);
    },
  });

  return { data, isLoading, isError };
};

export const useSingleProject = (id: string) => {
  const queryFn = async (token: string, id: string) => {
    const res = await API.get(`/i2i/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res) return res.data;
    throw new Error("Failed to fetch project");
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const token = await firebase.auth()?.currentUser?.getIdToken();
      if (!token) throw new Error("User token not available");
      return queryFn(token, id);
    },
  });

  return { data, isLoading, isError };
};
