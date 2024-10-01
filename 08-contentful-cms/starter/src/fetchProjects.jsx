import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "7j430glva2ym",
  environment: "master",
  accessToken: "GsEfJPrOac3ohyuEExiY8xZsWWEY1hpelHNIMSWbHuc",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects2",
      });

      const projects = response.items.map((item) => {
        const { title, url, img } = item.fields;
        const id = item.sys.id;
        const imgUrl = img?.fields?.file?.url;
        return {
          title,
          url,
          id,
          imgUrl,
        };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
