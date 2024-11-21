<template>
  <div class="home">
    <div class="home__content">
      <h1>Добро пожаловать в GlobalBank!</h1>

      <section class="info">
        <h2>Почему выбирают нас?</h2>
        <div class="info__content">
          <img src="@/assets/images/moneyTree.jpg" alt="Банк" class="info__image" />
          <ul class="info__list">
  <li>
    <strong>Надежные вклады</strong> – мы гарантируем сохранность ваших средств.
  </li>
  <li>
    <strong>Инновационные решения</strong> – мобильное приложение и интернет-банк.
  </li>
  <li>
    <strong>Гибкие кредиты</strong> – кредитные продукты на любой вкус и срок.
  </li>
  <li>
    <strong>Доступные ставки</strong> – выгодные условия по всем нашим услугам.
  </li>

  <li>
    <strong>Программы лояльности</strong> – бонусы и скидки для наших клиентов.
  </li>
  <li>
    <strong>Безопасность</strong> – передовые системы защиты ваших данных и средств.
  </li>
  <li>
    <strong>Широкая сеть отделений</strong> – всегда рядом, чтобы поддержать вас.
  </li>
</ul>

        </div>
      </section>

     <section class="offers">
  <h2>Наши предложения</h2>
  <div class="offers__cards">
    <div class="card card--green">
      <h3>Кредит 9.5%</h3>
      <p>Выгодные условия на сумму до 2 000 000 рублей с возможностью досрочного погашения. Получите кредит на любые нужды без лишних вопросов.</p>
    </div>
    <div class="card card--yellow">
      <h3>Депозит 7.2%</h3>
      <p>Накопите мечту, начиная с 100 рублей. Мы предлагаем депозиты с гибкими условиями и максимальными процентами для ваших сбережений.</p>
    </div>
    <div class="card card--blue">
      <h3>Обслуживание бизнеса</h3>
      <p>Счета и кредиты для вашего дела. Поддерживаем малый и средний бизнес с индивидуальными условиями по расчетным счетам и кредитованию.</p>
    </div>
    <div class="card card--lightgreen">
      <h3>Мобильное приложение для управления финансами</h3>
      <p>Скачайте наше приложение и управляйте своими счетами, следите за расходами и доходами, а также получайте уведомления о важных событиях на вашем счете.</p>
    </div>
    <div class="card card--teal">
      <h3>Кредитные карты с кэшбэком</h3>
      <p>Получайте кэшбэк до 5% на повседневные покупки и пользуйтесь беспроцентным периодом до 60 дней. Удобно, выгодно и просто.</p>
    </div>
    <div class="card card--lime">
      <h3>Ипотека на новое жилье</h3>
      <p>Мы предлагаем ипотечные кредиты на покупку квартиры с низкими ставками и минимальными первоначальными взносами. Станьте владельцем собственного жилья уже сегодня.</p>
    </div>
    <div class="card card--orange">
      <h3>Потребительский кредит 10%</h3>
      <p>Получите деньги на любые нужды с минимальной процентной ставкой.</p>
    </div>
    <div class="card card--cyan">
      <h3>Мобильный банк</h3>
      <p>Простой и удобный интерфейс для управления счетами прямо на вашем телефоне.</p>
    </div>
  </div>
</section>



      <section class="statistics">
  <h2>Наши достижения</h2>

  <div class="history">
    <div class="history-item">
      <img src="@/assets/images/grapficUp.jpg" alt="История 1" class="history-img">
      <div class="history-text">
        <h3>Как мы достигли успеха</h3>
        <p>Мы начали с маленькой команды и упорного труда. С каждым шагом мы улучшали наш продукт, вовлекаясь в постоянное совершенствование.</p>
      </div>
    </div>

    <div class="history-item">
      <img src="@/assets/images/treeMoney.jpg" alt="История 2" class="history-img">
      <div class="history-text">
        <h3>Присоединяйтесь к нам</h3>
        <p>Вы можете стать частью нашей истории успеха. Выбор нас — это уверенный шаг к вашим целям и достижениям!</p>
      </div>
    </div>
  </div>

  <p class="chart-description">Посмотрите, как наш успех отражается на графике ниже.</p>

  <canvas id="successChart"></canvas>
</section>


      <section class="faq">
        <h2>Часто задаваемые вопросы</h2>
        <AppAccordion :items="faqItems" />
      </section>

      <section class="historytotal">
  <h2>История банка</h2>
  <p>
    Наш банк был основан в 1995 году с целью сделать банковские услуги доступными для каждого. С тех пор мы уверенно движемся к своей цели, предоставляя качественные и удобные решения для наших клиентов.
  </p>
  <p>
    Мы стали одним из первых банков, предложивших инновационные цифровые продукты, и продолжили улучшать сервис, расширяя возможности наших клиентов. Каждый год мы решаем все более сложные задачи и внедряем новые технологии, чтобы быть на шаг впереди.
  </p>
  <p>
    Сегодня мы — лидер в области цифровых финансовых услуг и уверены, что в будущем сможем предложить еще более эффективные и безопасные решения, которые будут способствовать развитию вашего бизнеса и личных финансов.
  </p>

  <img src="@/assets/images/moneyOnHands.jpg" alt="История банка" class="history-img">

  <button @click="goToApply">Стать клиентом банка</button>
</section>

    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Chart from 'chart.js/auto';
import AppAccordion from '../components/common/AppAccordion.vue';


export default defineComponent({
  components: { AppAccordion },
  setup() {
    const router = useRouter();
    const faqItems = [
  { question: 'Как открыть счёт?', answer: 'Посетите ближайшее отделение или откройте счёт через наше мобильное приложение.' },
  { question: 'Как проверить баланс?', answer: 'Используйте наше приложение или войдите в интернет-банк для проверки баланса.' },
  { question: 'Как перевести деньги между своими счетами?', answer: 'Переводите средства через мобильное приложение или в личном кабинете на сайте.' },
  { question: 'Можно ли закрыть счёт дистанционно?', answer: 'Да, вы можете закрыть счёт через мобильное приложение или через интернет-банк.' },
  { question: 'Как заблокировать карту?', answer: 'Заблокировать карту можно через мобильное приложение, в личном кабинете, или позвонив в наш центр поддержки.' },
  { question: 'Как восстановить пароль?', answer: 'Вы можете восстановить пароль через мобильное приложение или на сайте, следуя инструкциям в разделе "Забыли пароль?".' },
  { question: 'Какие документы нужны для открытия счёта?', answer: 'Для открытия счёта потребуется паспорт и, возможно, дополнительные документы в зависимости от типа счёта.' },
  { question: 'Какие комиссии существуют при переводах?', answer: 'Комиссии зависят от типа перевода и суммы. Подробности вы можете найти в разделе "Тарифы" на нашем сайте.' },
 ];


    const goToApply = () => {
      router.push('/apply');
    };

    onMounted(() => {
      const ctx = (document.getElementById('successChart') as HTMLCanvasElement).getContext('2d');
      new Chart(ctx!, {
        type: 'line',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [
            {
              label: 'Количество клиентов (млн)',
              data: [1, 2, 3, 4, 5, 6],
              borderColor: '#4caf50',
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
          },
        },
      });
    });

    return { faqItems, goToApply };
  },
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  font-size: 1.3rem;
  color: #5b6364;
  line-height: 1.5;
  text-align: center;



  &__content {
    padding: 20px;

    h1 {
      font-size: 3rem;
      color: #2c3e50;
      text-align: center;
      margin-bottom: 20px;
    }

    section {
      margin-bottom: 40px;

      h2 {
        font-size: 1.8rem;
        color: #4caf50;
        margin:5rem 0;
        text-align: center;
      }
    }.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;
    margin: 0 auto;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      gap: 2rem;
      font-size: 1.1rem;
      width: 100%;
    }

    .info__image {
      max-width: 30rem;
      max-height: 30rem;
      border-radius: 10px;
      object-fit: cover;

      @media (max-width: 768px) {
        max-width: 15rem;
        max-height: 15rem;
        margin: 0 auto;
      }

      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }

    .info__list {
      flex-grow: 1;
      list-style-type: none;
      text-align: center;

      @media (max-width: 768px) {
        margin: 0 auto;
        padding: 0;
        display: block;
      }

      li {
        margin-bottom: 10px;

        strong {
          color: #ddb00c;
          font-weight: 700;
          transition: transform 0.3s ease;

          &:hover {
            color: #cea40c;
          }
        }
      }
    }
  }
}

    .offers {
  padding: 40px 20px;
  background-color: #f4f6f9;
  .offers__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 0 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    margin: 0 auto;
  }

  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    transition: transform 0.5s ease, opacity 0.5s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
    }
  }
}

  .card--green {
    background-color: #6dc067;
  }

  .card--yellow {
    background-color: #fac70f;
  }

  .card--blue {
    background-color: #4a90e2;
  }

  .card--lightgreen {
    background-color: #8ecf97;
  }

  .card--teal {
    background-color: #64b5a4;
  }

  .card--lime {
    background-color: #cddc39;
  }

  .card--orange {
    background-color: #ff8c00;
  }

  .card--cyan {
    background-color: #00bcd4;
  }
    h3 {
      color: #2d6630;

      font-size: 1.25rem;
      font-weight: 700;
    }

    p {
      color: #2c3e50;
      font-size: 1rem;
      line-height: 1.6;
    }
  }
}

.statistics {
  text-align: center;
  padding: 2rem;
  .history {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 5rem 0;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .history-item {
    display: flex;
    align-items: center;
    max-width: 45%;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      justify-content: center;
      margin: 0 auto;
      max-width: 90%;
      text-align: center;
      flex-direction: column;
    }

    .history-img {
      width: 15rem;
      height: 13rem;
      margin-right: 1rem;
      border-radius: 10px;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      @media (max-width: 768px) {
        width: 10rem;
        height: 7rem;
        margin-right: 0;
        margin-bottom: 1rem;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    .history-text {
      max-width: 60%;

      @media (max-width: 768px) {
        max-width: 100%;
      }

      h3 {
        color: #ddb00c;
        font-weight: 700;
        transition: transform 0.3s ease;
        font-size: 1.5rem;

        &:hover {
          color: #cea40c;
        }
      }

      p {
        font-size: 1rem;
        color: #555;
      }
    }
  }
}

  .chart-description {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color:  #ddb00c;
    font-weight: 700;
    transition: transform 0.3s ease;

&:hover {
  color:  #cea40c;
        }
  }

  canvas {
    width: 40rem;
    height: 40rem;
    margin: 0 auto;
  }
}

.historytotal {
  text-align: center;
  padding: 2rem 1.5rem;



  p {
    margin-bottom: 20px;
    text-align: justify;
    font-size: 1.2rem;
    color: #555;
  }

  .history-img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 5rem 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  object-fit: cover;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.02);
}
  }

  button {
    display: block;
    margin: 1rem auto;
    padding: 15px 30px;
    font-size: 1.2rem;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background-color: #45a049;
      transform: translateY(-3px);
    }

    &:active {
      background-color: #389e42;
      transform: translateY(1px);
    }
  }
}
  }@media (max-width: 768px) {
  .info__content {
    flex-direction: column;
    gap: 2rem;
  }

  .offers__cards {
    grid-template-columns: 1fr;
  }

  .history-item {
    width: 100%;
    flex-direction: column;
    align-items: center;

    .history-img {
      width: 100%;
    }

    .history-text {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
