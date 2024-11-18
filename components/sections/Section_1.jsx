import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Section_1 = () => (
  <ScrollView>
    <Surface style={styles.surface}>
      <Text style={styles.text}>
        This is a text box using React Native Paper's Surface component. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis, asperiores corrupti libero, laudantium molestias consequuntur at sit numquam cum totam earum, magni ipsa officiis facilis perspiciatis repellat distinctio suscipit culpa eaque soluta! Numquam atque fuga, ipsam, minima unde incidunt optio vero voluptates cupiditate nisi in ducimus explicabo placeat animi magni, maiores et distinctio magnam corrupti officia dolor libero cum. Ullam sit quo ut vel esse perspiciatis fugiat aliquam, reiciendis veniam non, optio cupiditate sunt, deleniti repellat vitae. Fugit tempore minima ea voluptate omnis, quos debitis consequuntur ratione consequatur ducimus cumque esse dignissimos voluptatibus eos quasi reprehenderit labore? Corporis, amet laboriosam provident velit fugiat, voluptate, molestiae libero debitis impedit magni aliquam. Delectus alias ullam enim nemo vel libero, harum numquam fugiat? Pariatur soluta deserunt, veritatis minima vero sapiente facere ipsam tempore libero impedit quasi, iusto debitis amet voluptatum ipsa ea excepturi aspernatur harum ullam omnis? Consequuntur, sed. Praesentium, alias deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat, magni soluta illum fugiat repudiandae, incidunt sit vitae perferendis laborum praesentium. Aut explicabo possimus facilis molestiae, nostrum amet, voluptatem architecto animi, quidem fugit cumque accusantium ducimus dolorum iure repellendus sapiente libero soluta tempore placeat ut ipsa beatae. Quaerat molestiae modi facilis voluptate facere ea fugiat recusandae ut, delectus illum accusantium, laborum nobis deserunt fuga officiis quae dignissimos pariatur provident omnis vel architecto corporis. Fugit nobis at voluptates. Possimus tempora, itaque blanditiis eveniet porro voluptates rerum ut placeat quisquam odit vel. Dicta dolores esse blanditiis maiores sunt, adipisci voluptatibus illum odio ea maxime aperiam fugiat ullam vero incidunt commodi eos at consequuntur eligendi ratione sed laudantium iusto ad placeat quod? Est eaque mollitia placeat non eius esse itaque quis obcaecati vitae! Nulla beatae exercitationem qui rerum tempora voluptatem dolores soluta consequuntur nemo provident eos necessitatibus autem reprehenderit molestias aliquid temporibus, expedita, voluptas et quia voluptate deserunt asperiores. Voluptatem obcaecati et officia aspernatur ea est! Aliquid quia aliquam, quisquam debitis vero, nulla nisi iure impedit eum sequi iste dignissimos, expedita illo dicta culpa deleniti laboriosam sit voluptatibus hic provident rem ipsam excepturi reprehenderit! Deserunt itaque ducimus iure, repellat rerum debitis eaque esse?
      </Text>
    </Surface>
  </ScrollView>
);

const styles = StyleSheet.create({
  surface: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 4, // Adds shadow effect
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Section_1;
