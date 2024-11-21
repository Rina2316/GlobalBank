<template>
  <div class="profile">

    <div class="profile__content">

      <section class="profile__data">
        <h1>Добро пожаловать, {{ user.name || 'Гость' }}!</h1>
      <img src="@/assets/images/user.jpg" alt="Аватар" class="profile__avatar" />
        <h2>Ваши данные</h2>
        <p>Имя: {{ user.name || 'Не указано' }}</p>
        <p>Фамилия: {{ user.surname || 'Не указано' }}</p>
      </section>

      <section class="profile__bank-card">
  <h1>Привязанные карты</h1>
  <div class="bank-card__wrapper">
    <form @submit.prevent="saveCard">
      <div class="bank-card">
        <label>
          Номер карты:
          <input type="text" v-model="cardNumber" maxlength="16" placeholder="0000 0000 0000 0000" />
        </label>
        <label>
          Банк:
          <input type="text" v-model="cardBank" placeholder="Название банка" />
        </label>
        <button type="submit">Сохранить</button>
      </div>
    </form>
    <div v-if="user.cardLastDigits" class="saved-card">
      <p>Номер карты: **** **** **** {{ user.cardLastDigits }}</p>
      <p>Банк: {{ user.cardBank }}</p>
    </div>
  </div>
</section>


      <section class="profile__finance">
        <h1>Ваши финансы за текущий месяц</h1>
        <div class="finance-summary">
          <div class="finance-item">
            <p>Доходы</p>
            <h3>{{ user.income || 50000 }} ₽</h3>
          </div>
          <div class="finance-item">
            <p>Расходы</p>
            <h3>{{ user.expenses || 30000 }} ₽</h3>
          </div>
          <div class="finance-item">
            <p>Чистая прибыль</p>
            <h3>{{ (user.income || 50000) - (user.expenses || 30000) }} ₽</h3>
          </div>
        </div>
      </section>

      <section class="profile__investment-tips">
        <h1>Советы по инвестициям и накоплениям</h1>

      <img src="@/assets/images/flyMoney.jpg" alt="money" class="profile_money" />
        <ul class="profile__investment-tips-ul">
          <li>Создайте <strong>резервный фонд</strong> на 3–6 месяцев расходов.</li>
          <li>Рассмотрите инвестирование в <strong>акции и облигации</strong>.</li>
          <li>Откладывайте <strong>10% дохода</strong> ежемесячно.</li>
          <li>Используйте автоматические переводы для <strong>накоплений</strong>.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useUserStore } from '../store/userStore';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const user = computed(() => userStore.user);

    const cardNumber = ref('');
    const cardBank = ref('');

    const saveCard = () => {
      const lastDigits = cardNumber.value.slice(-4);
      userStore.setCard({ cardLastDigits: lastDigits, cardBank: cardBank.value });
      cardNumber.value = '';
      cardBank.value = '';
    };

    return { user, cardNumber, cardBank, saveCard };
  },
});
</script>


<style scoped lang="scss">.profile {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  color: #5b6364;
  line-height: 1.5;


  h1 {
        font-size: 1.8rem;
        color: #4caf50;
        margin:3rem 0;
        text-align: center;
      }

  &__avatar {
    max-width: 10rem;
    max-height: 10rem;
    border-radius: 50%;
    border: 0.5rem solid #4caf50;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    section {
      background: white;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .bank-card__wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 5rem auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .bank-card {
      background-color: #e8f5e9;
      border: 1px solid #c8e6c9;
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 0.9rem;
        color: #2e7d32;

        input {
          padding: 10px;
          border: 1px solid #a5d6a7;
          border-radius: 8px;
          font-size: 1rem;
          background: #f1f8e9;
          transition: box-shadow 0.2s;

          &:focus {
            box-shadow: 0 0 5px rgba(46, 125, 50, 0.8);
            outline: none;
          }
        }
      }

      button {
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #2e7d32;
        color: white;
        font-size: 1rem;
        cursor: pointer;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: background-color 0.3s, transform 0.2s;

        &:hover {
          background-color: #1b5e20;
          transform: scale(1.05);
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }

  .saved-card {
    background: linear-gradient(135deg, #43a047, #388e3c);
    color: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    text-align: center;

    p {
      margin: 5px 0;
      font-size: 1rem;
    }
  }
}.profile__investment-tips {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile__investment-tips-ul {
    list-style-type: none;
    font-size: 1.2rem;
    padding-left: 0;
    text-align: center;

    strong {
      color: #ddb00c;
      font-weight: 700;
      transition: transform 0.3s ease;

      &:hover {
        color: #cea40c;
      }
    }
  }

  .profile_money {
    max-width: 30rem;
    max-height: 30rem;
    border-radius: 10px;
    object-fit: cover;
    margin: 0 auto;
    padding-left: 5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

@media (max-width: 768px) {
  .profile__investment-tips {
    .profile__investment-tips-ul {
      text-align: center;
      padding-left: 0;
    }

    .profile_money {
      max-width: 10rem;
      max-height: 10rem;
      padding-left: 0;
    }
  }
}


.finance-summary {
  display: flex;
  justify-content: space-between;
  gap: 10px;

  .finance-item {
    flex: 1;
    background: #ecf0f1;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    max-width: 25rem;

    h3 {
      margin-top: 5px;
      color: #27ae60;
    }
  }
}

@media (max-width: 768px) {
  .finance-summary {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .finance-item {
    width: 10rem;
    padding: 15px;
  }
}

}

</style>
