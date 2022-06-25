import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//components
import UserList from "../components/UserList";

const Home = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const url = "https://randomuser.me/api/?results=10";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  function renderUsersItem(itemData) {
    const item = itemData.item;
    const props = {
      first: item.name.first,
      last: item.name.last,
      gender: item.gender,
      id: item.login.uuid,
    };

    return <UserList {...props} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderUsersItem}
      />
    </SafeAreaView>
  );
};

export default Home;
