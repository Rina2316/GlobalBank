<template>
  <div>
    <section class="info">
      <h1>Как подать заявку</h1>
      <p>
        Заполните форму ниже, чтобы подать заявку. Мы обещаем обработать
        вашу заявку в течение 24 часов, и наш менеджер свяжется с вами для
        уточнения всех деталей.
      </p>
    </section>

    <div class="apply">
      <h2>Оставьте заявку</h2>
      <form @submit.prevent="submitForm">
        <AppInput v-model="formData.name" label="Имя" />
        <AppInput v-model="formData.surname" label="Фамилия" />
        <AppTextarea v-model="formData.question" label="Ваш вопрос" />
        <button type="submit">Отправить</button>
      </form>
    </div>

    <section class="processing-info">
      <h2>Когда получите ответ?</h2>
      <img src="@/assets/images/wallet.jpg" alt="Сотрудничество" class="processing-info__image" />
      <p>
        После того как вы отправите заявку, она будет обработана нашей
        командой. Вы получите ответ в течение 24 часов. Если возникнут
        вопросы, наш менеджер свяжется с вами по телефону или электронной почте.
      </p>
    </section>

    <section class="products">
      <h2>Наши продукты</h2>
      <p>Мы предлагаем широкий выбор финансовых продуктов. Ознакомьтесь с нашими картами!</p>

      <div class="product-slider">
        <div class="product-cards">
          <div v-for="(product, index) in extendedProducts" :key="index" class="product-card">
            <img src="@/assets/images/card.jpg" alt="Кредитная карта" />
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import AppInput from '../components/common/AppInput.vue';
import AppTextarea from '../components/common/AppTextarea.vue';
import { useUserStore } from '../store/userStore';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { AppInput, AppTextarea },
  setup() {
    const userStore = useUserStore();

    const router = useRouter();
    const notyf = new Notyf();

    const formData = reactive({
      name: '',
      surname: '',
      question: '',
    });

    const products = reactive([
      {
        title: 'Кредитная карта “Золотая”',
        description: 'Предоставляет максимальные возможности для путешествий и покупок. Бонусы за каждую покупку и эксклюзивные предложения от партнёров.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Семейная”',
        description: 'Идеальный выбор для семейных расходов. Повышенные лимиты и процентные ставки, а также скидки на покупку товаров для дома и детей.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Премиум”',
        description: 'Для тех, кто ценит комфорт и стиль. Привилегии для путешественников и особые условия по начислению бонусов для крупных покупок.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Студенческая”',
        description: 'Карта с низким процентом и льготными условиями для студентов. Бесплатное обслуживание при соблюдении минимальных условий использования.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Кэшбэк”',
        description: 'Получайте кэшбэк с каждой покупки! Идеальна для тех, кто часто делает повседневные расходы: продукты, коммунальные услуги, транспорт.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Путешественник”',
        description: 'Специальные бонусы и скидки на путешествия и бронирование отелей. Бесплатное страхование и привилегии для частых путешественников.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Молодежная”',
        description: 'Отличный выбор для молодежи, желающей развивать свою финансовую независимость. Без комиссии за переводы и дополнительные бонусы за покупки.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “VIP”',
        description: 'Идеальна для клиентов с высоким уровнем дохода, предлагающая эксклюзивные условия: льготные проценты, подарки и доступ к VIP-мероприятиям.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Бизнес”',
        description: 'Для предпринимателей и бизнесменов. Высокие лимиты, низкие ставки по кредиту и специальные предложения для деловых поездок и покупок.',
        image: '/assets/images/card.jpg'
      },
      {
        title: 'Кредитная карта “Мечта”',
        description: 'Карта с бонусами и скидками на товары для дома, авто и путешествий. Идеальна для тех, кто хочет сделать каждую покупку выгодной.',
        image: '/assets/images/card.jpg'
      },
    ]);

    const extendedProducts = computed(() => [
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
      ...products,
    ]);

    const submitForm = () => {

      if (!formData.name || !formData.surname || !formData.question) {
        notyf.error('Пожалуйста, заполните все поля!');
        return;
      }


      userStore.setUser(formData);

      notyf.success('Заявка успешно создана!');

      setTimeout(() => {router.push('/profile');
      }, 2000);
    };

    return {
      formData,
      submitForm,
      extendedProducts,
    };
  },
});
</script>


<style scoped lang="scss">
section {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

h1, h2 {
  font-size: 1.8rem;
        color: #4caf50;
        margin:3rem 0;
        text-align: center;
}

p {
  font-size: 1.3rem;
  color: #5b6364;
  line-height: 1.5;
  text-align: center;
  margin-top: 3rem;
}

.apply {
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    button {
      align-self: flex-start;
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.3rem;
      transition: background-color 0.3s ease;
      margin: 2rem auto;

      &:hover {
        background-color: #45a049;
      }

      &:disabled {
        background-color: #d6d6d6;
        cursor: not-allowed;
      }
    }
  }
}
.processing-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;

  .processing-info__image {
    margin: 0 auto;
    max-width: 20rem;
    max-height: 20rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {

    align-items: center;
    padding: 1rem;

    .processing-info__image {
      max-width: 15rem;
      max-height: 15rem;
    }
  }
}

.products {
  text-align: center;
  position: relative;

  .product-slider {
    overflow: hidden;
  }

  .product-cards {
    display: flex;
    gap: 20px;
    animation: scroll 140s linear infinite;
  }

  .product-card {
    min-width: 300px;
    max-width: 300px;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;

    img {
      max-width: 100%;
      border-radius: 8px;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.2rem;
      color: #2c3e50;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #7f8c8d;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .products {
    .product-cards {
      gap: 10px;
    animation: scroll 40s linear infinite;
    }

    .product-card {
      min-width: 200px;
      max-width: 200px;
      padding: 15px;

    }

    img {
      max-width: 90%;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
}

</style>


