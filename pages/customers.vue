<template>
  <v-sheet class="pa-6 !tw-rounded-2xl">
    <div class="d-flex">
      <SText
        class="w-50"
        placeholder="お名前検索"
        preicon="mdi-magnify"
        clearable
      ></SText>
      <div class="w-50 text-right mt-2">
        <VBtn
          color="primary"
          text="新規作成"
          variant="outlined"
          prepend-icon="mdi-plus-box-outline"
        ></VBtn>
      </div>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="!tw-text-center">id</th>
          <th class="!tw-text-center">お名前</th>
          <th class="!tw-text-center">連絡先</th>
          <th class="!tw-text-center">メール</th>
          <th class="!tw-text-center">ご利用回数</th>
          <th class="!tw-text-center">扱い注意</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, i) in customers" :key="i">
          <td class="tw-text-center">{{ customer.id }}</td>
          <td class="tw-text-center">{{ customer.name }}</td>
          <td class="tw-text-center">
            <v-icon
              icon="mdi-phone"
              size="18"
              class="mr-2 tw-mb-0.5"
              color="secondary"
            ></v-icon>
            {{ customer.phone }}
          </td>
          <td class="tw-text-center">
            <v-icon
              icon="mdi-email-outline"
              size="18"
              class="mr-2"
              color="secondary"
            ></v-icon>
            {{ customer.mail }}
          </td>
          <td class="tw-text-center">{{ customer.use_count }}</td>
          <td class="tw-text-center">
            <v-chip
              v-if="customer.attention_flag"
              color="error"
              variant="tonal"
              label
              prepend-icon="mdi-account-alert"
            >
              注意
            </v-chip>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import SText from "../components/Text.vue";
type Customer = {
  id: Number;
  name: String;
  phone: String;
  mail: String;
  post_code: String;
  address: String;
  age: Number;
  use_count: Number;
  attention_flag: Boolean;
};

const customers = ref<Customer[]>([
  {
    id: 1,
    name: "XXXXXX",
    phone: "090-1111-1111",
    mail: "aaaa@example.com",
    post_code: "999-9999",
    address: "ZZZZZZZZZZZZ",
    age: 1,
    use_count: 1,
    attention_flag: false,
  },
  {
    id: 2,
    name: "XXXXXX",
    phone: "090-1111-1111",
    mail: "aaaa@example.com",
    post_code: "999-9999",
    address: "ZZZZZZZZZZZZ",
    age: 1,
    use_count: 3,
    attention_flag: true,
  },
  {
    id: 3,
    name: "XXXXXX",
    phone: "090-1111-1111",
    mail: "aaaa@example.com",
    post_code: "999-9999",
    address: "ZZZZZZZZZZZZ",
    age: 1,
    use_count: 6,
    attention_flag: false,
  },
]);
</script>
