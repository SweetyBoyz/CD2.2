import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, bottom: 15, backgroundColor: '#ECC9FB' }}>
      <Text style={{textAlign: 'center', top: 62, fontSize:23, fontWeight:'bold'}}>Лучший цвет недели? Розовый!</Text>
    </View>
    <View style={{ flex: 2, backgroundColor: '#FBC9F7' }}>
      <Text style={{textAlign: 'center', top: 66, fontSize:20}}>Вот этот цвет 3 раза в неделю носи, спина не будет болеть.</Text>
    </View>
    <View style={{ flex: 6, backgroundColor: '#FE7CF4' }}>
    <Text style={{textAlign: 'center', top: 66, fontSize:14}}>Розовый цвет означает романтичность, доброту, любовь, страстность. Чем он бледнее, тем сильнее выражение любви. Вызывает чувство комфорта, успокаивает, избавляет от навязчивых мыслей. Его питает аура невинности и чистоты. Смесь красного и белого соединила в себе, казалось бы, абсолютно несочетаемые проявления таких чувств и эмоций, как агрессия и чистота разума, тем самым, успокоив первую из них и придав силу второй.</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});