import React from "react";
import "./Basket.css";

const Basket = () => {
  return (
    <>
      <main class="background content">
        <div class="container">
          <section>
            <h2 class="warm_net_title">Про компанію</h2>
            <p class="warm_net_plot">
              <p>
                Healthy Rusanivka – лідер ринку України за обсягом продажів в
                натуральному виразі.
              </p>
              <p>
                90-річний досвід та сертифікація виробництва за GMP дозволили
                нам заслужити довіру 15 країн світу.
              </p>
              <p>
                Ми випускаємо 180 препаратів з фокусом на кардіологію,
                неврологію та управління болем.
              </p>
            </p>
            <div class="warm_net">
              <p class="warm_net_item_1">60+ препаратів у портфелі розробки</p>
              <p class="warm_net_item_2">15 лікарських форм</p>
              <p class="warm_net_item_3">
                #1 за обсягом продажів в натуральному виразі
              </p>
              <p class="warm_net_item_4">GMP cертифікація з 2002 року</p>
              <p class="warm_net_item_5">
                30% інвестицій щорічно направляються на нові продукти
              </p>
            </div>
          </section>
          <section class="building_vehicle_content">
            <h2 class="building_vehicle_title">Наші цінності </h2>
            <div class="building_vehicle">
              <p class="building_vehicle_item_1">
                Амбіційне лідерство
                <br />
                <span>
                  Ми найкращі у тому, що ми робимо – кожен і разом. Ми мислимо і
                  діємо за межами стереотипів. Ми зухвалі і невгамовні –
                  досягнувши високої мети, ми ставимо перед собою ще сміливіші
                  цілі.
                </span>
              </p>
              <p class="building_vehicle_item_2">
                Extreme ownership (загострене відчуття власника)
                <br />
                <span>
                  Кожен з нас щодня досягає більшого і несе відповідальність за
                  кінцевий результат компанії як власник.
                </span>
              </p>
              <p class="building_vehicle_item_3">
                Відповідальність <br />
                <span>
                  Ми щоденно свідомо несемо відповідальність перед колегами,
                  пацієнтами, медичною спільнотою, партнерами, суспільством і
                  планетою.
                </span>
              </p>
              <p class="building_vehicle_item_4">
                Надбання <br />{" "}
                <span>
                  Ми пишаємося здобутками, які нас сформували як лідерів і
                  скеровують на подальший розвиток. Це підходи, ставлення,
                  стандарти, які вибудували міцний фундамент і які ми гордо
                  несемо з собою далі: амбітність, якість як наше ДНК,
                  піклування про людей, стійкість у складні періоди,
                  далекоглядність.
                </span>
              </p>
              <p class="building_vehicle_item_5">Увага до наших партнерів</p>
              <p class="building_vehicle_item_6">Гарантія якості</p>
              <p class="building_vehicle_item_7">Піклування про природу</p>
            </div>
          </section>
        </div>
      </main>

      <section class="background_2">
        <div class="container client_content">
          <div class="client_header">
            <h2>Наші партнери</h2>
            {/* <a href="#" class="all_projects">
              Все проекты
            </a> */}
          </div>
          <div class="clients">
            <div class="clients_item_1 clients_item">
              <img src="./img/clients/clients_1.svg" alt="" />
              <div class="clients_address">
                <p class="hover_text">
                  Аптека "Бажаємо Здоров'я"
                </p>
              </div>
            </div>
            <div class="clients_item_2 clients_item">
              <div>
                <img src="./img/clients/clients_2_1.svg" alt="" />
              </div>
              <div>
                <img src="./img/clients/clients_2_2.svg" alt="" />
              </div>
              <div class="clients_address">
                <p class="hover_text">
                  "Аптека 911"
                </p>
              </div>
            </div>
            <div class="clients_item_3 clients_item">
              <img src="./img/clients/clients_3.svg" alt="" />
              <div class="clients_address">
                <p class="hover_text">
                  Аптека "Подорожник"
                </p>
              </div>
            </div>
            <div class="clients_item_4 clients_item">
              <img src="./img/clients/clients_4.svg" alt="" />
              <div class="clients_address">
              <p class="hover_text">
                  Аптека "Бажаємо Здоров'я"
                </p>
              </div>
            </div>
            <div class="clients_item_5 clients_item">
              <img src="./img/clients/clients_5.svg" alt="" />
              <div class="clients_address">
              <p class="hover_text">
                  "Аптека 911"
                </p>
              </div>
            </div>
            <div class="clients_item_6 clients_item">
              <img src="./img/clients/clients_6.svg" alt="" />
              <div class="clients_address">
              <p class="hover_text">
                  Аптека "Подорожник"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Basket;
