import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
  renderToFile,
  renderToStream,
} from "@react-pdf/renderer";
import path from "node:path";
import * as React from "react";

// function wordBreak(text) {
//   return Array.from(
//     new Intl.Segmenter("ja", {
//       granularity: "word",
//     }).segment(text)
//   );
// }

const fontsDir =
  process.env.NODE_ENV === "development"
    ? "./fonts"
    : path.join(__dirname, "./fonts");

Font.register({
  family: "NotoSansJP",
  fonts: [
    {
      src: path.join(fontsDir, "./NotoSansJP-Regular.ttf"),
    },
    {
      src: path.join(fontsDir, "./NotoSansJP-Bold.ttf"),
      fontWeight: "bold",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "NotoSansJP",
  },
  header: {
    fontSize: 24,
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "center",
  },
  details: {
    marginBottom: 30,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemsTable: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    borderTopWidth: 1,
    borderLeftWidth: 0,
    fontWeight: "bold",
    padding: 5,
  },
  tableCol: {
    width: "20%",
    borderStyle: "solid",
    borderWidth: 1,
    textAlign: "center",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  textVertical: {
    flexDirection: "column",
  },
  company: {
    marginTop: 10,
  },
});

const data = [
  {
    title: "発注日",
    value: "2024/4/01",
    items: [
      {
        name: "サンプル1サンプル1サンプル1サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "aiueoaiueoaiueoaiueoaiueoaiueoaiueoaiueo",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
      {
        name: "サンプル1",
        surface: "1",
        thickness: "式",
        width: "10,000",
        length: "10,000",
      },
    ],
  },
];
export default function PDF() {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <View>
          <Text style={styles.header}>領収書</Text>
        </View>
        <View style={styles.details}>
          {data.map((detail, index) => (
            <View style={styles.detailItem} key={index}>
              <View style={styles.textVertical}>
                <Text>株式会社〇〇</Text>
                <Text>〇〇 御中</Text>
              </View>
              <View>
                <Text>発行日{detail.value}</Text>
                <View style={styles.company}>
                  <Text>株式会社〇〇</Text>
                  <Text>東京都〇〇〇〇〇〇〇〇〇〇</Text>
                  <Text>TEL：00-0000-0000</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View>
          <View style={styles.itemsTable}>
            <View style={styles.tableRow} fixed>
              <Text style={styles.tableColHeader}>概要</Text>
              <Text style={styles.tableColHeader}>数量</Text>
              <Text style={styles.tableColHeader}>単位</Text>
              <Text style={styles.tableColHeader}>単価</Text>
              <Text style={styles.tableColHeader}>金額</Text>
            </View>
            {data[0].items.map((item, index) => (
              // ハイフネーションをコントロールするワークアラウンド
              // https://github.com/diegomura/react-pdf/issues/419
              <View style={styles.tableRow} key={index} wrap={false}>
                {/* <Text
                  style={styles.tableCol}
                  hyphenationCallback={(word) => [word, ""]}
                >
                  {wordBreak(item.name).map(({ segment }) => segment)}
                </Text> */}
                <Text
                  style={styles.tableCol}
                  hyphenationCallback={(word) =>
                    Array.from(word).flatMap((char) => [char, ""])
                  }
                >
                  {item.name}
                </Text>
                <Text style={styles.tableCol}>{item.surface}</Text>
                <Text style={styles.tableCol}>{item.thickness}</Text>
                <Text style={styles.tableCol}>{item.width}</Text>
                <Text style={styles.tableCol}>{item.length}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

renderToFile(<PDF />, "./example.pdf");

(async () => {
  const stream = await renderToStream(<PDF />);
  stream.pipe(process.stdout);
})();
