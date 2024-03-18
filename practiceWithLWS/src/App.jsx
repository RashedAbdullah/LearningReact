import { useState } from "react";
import { sculptureList } from "./components/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isShowDetails, setIsShowDetails] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-green-500 py-1 px-4 rounded text-white m-5"
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button
        onClick={() => setIsShowDetails(!isShowDetails)}
        className="bg-gray-500 text-white p-2 rounded m-2"
      >
        Details {!isShowDetails ? "🔽" : "🔼"}
      </button>
      {isShowDetails && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
      expedita iusto nisi eaque quasi placeat dignissimos, voluptatum quibusdam
      ex, accusantium odit officiis eos odio. Quae consequatur omnis itaque quos
      repudiandae?
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        architecto reprehenderit quos, ut quis quod aperiam pariatur voluptatem
        laudantium incidunt voluptate? Quidem vitae illo aperiam eveniet
        recusandae sit nam unde. Reiciendis ullam quo non, iure tempore eligendi
        sequi magni pariatur quia vel dolorum velit accusantium molestias
        delectus ratione nam aliquid nulla ut id doloribus corrupti fugiat
        mollitia! Enim, odio! Facilis sint tempore ad, corrupti fuga officiis
        modi harum tempora ducimus quaerat molestiae quisquam ut in rerum
        possimus? Inventore blanditiis consectetur modi soluta nihil esse minima
        molestiae! Ab dolorum, vitae in aliquam dolores iusto optio sapiente
        perspiciatis praesentium totam sed aut molestias sit provident doloribus
        tenetur porro id, nihil iste tempore laborum reprehenderit facilis qui
        numquam. Cum voluptatibus aliquid delectus placeat omnis harum quia
        suscipit fuga porro. Voluptatum iste, amet, autem perferendis nostrum
        aperiam tempora doloremque omnis consequatur sed quaerat? Quo est
        accusantium, dolore doloribus excepturi ipsa, explicabo obcaecati, alias
        pariatur at deleniti itaque! Accusamus fugiat vel autem nam?
        Perspiciatis, ipsum doloremque, eligendi optio earum tempore et
        aspernatur, sunt laboriosam corporis quis. Aspernatur quam, facere quasi
        dicta maxime assumenda veniam praesentium aliquam molestias ipsa
        provident nobis eum iusto voluptatibus dolorum quisquam impedit animi
        esse quia adipisci minus pariatur doloremque? Sapiente provident,
        aliquam laudantium vero rem repudiandae! Nobis natus laborum hic,
        consectetur iusto consequatur dolore nemo odit dicta quam quas. Esse
        quis doloribus dolorem reprehenderit rem expedita sint obcaecati,
        quibusdam culpa ullam nulla atque vitae, ad veniam animi voluptatum
        mollitia corrupti tenetur repellendus repellat. Vero repellendus sed
        dicta ab aliquam, quisquam amet in optio molestias consectetur ipsa nisi
        tempore autem odit, alias magni atque illo ducimus suscipit harum
        mollitia animi. Nostrum cum ad dignissimos maiores adipisci deleniti,
        tempora provident ullam, et enim consectetur nisi aut doloribus nulla
        velit neque odio nemo ea. Possimus repudiandae deserunt laudantium eum
        expedita, nam perspiciatis quaerat, id commodi voluptate dicta? Quia,
        expedita totam eum reiciendis magnam eius similique, porro sed itaque
        explicabo quaerat. Corporis, maxime aliquid aspernatur inventore ipsa
        laudantium ad veritatis nemo dolorem placeat necessitatibus ullam
        doloribus asperiores reiciendis, esse perferendis vitae temporibus? At
        sequi facere nam aut, impedit beatae eos voluptatum ducimus?
        Reprehenderit quae, hic minima impedit odit molestias sit saepe dolor
        consequuntur quasi sint itaque, fuga nihil eveniet! Maiores, officia
        aliquam. Vero suscipit iusto eaque magnam ullam ab, inventore accusamus
        reiciendis corporis id incidunt labore fuga tempora aliquam
        perspiciatis. Ipsam quos nulla, consequuntur dicta molestiae illum
        tempore laborum alias culpa, sapiente laboriosam. Fugiat, et. Libero,
        iure omnis ipsam expedita est temporibus explicabo culpa officiis
        repellat, sed velit assumenda accusantium quo soluta et quidem cum
        quisquam a hic recusandae suscipit? Voluptatibus ipsam odio sunt
        dignissimos dolor doloribus quos autem possimus enim perspiciatis, fuga
        repellendus qui officiis quidem inventore odit eius aliquam, culpa
        aspernatur. Possimus autem molestias vitae laboriosam quasi ipsam
        eligendi, nisi adipisci qui doloribus repellat perspiciatis unde at quo?
        Assumenda incidunt quis aut qui, adipisci maiores deserunt ex similique
        debitis dolor reprehenderit quae necessitatibus eaque architecto
        accusamus, cumque perferendis magni omnis blanditiis? Ducimus esse
        quaerat officia, sunt, minus nobis veniam doloremque commodi, non natus
        eaque. Aliquid saepe repudiandae et adipisci incidunt vel laudantium
        quos laboriosam, aperiam eaque ad autem reiciendis ratione minima
        tempora accusantium. Illo fugit reiciendis laborum nobis suscipit ea
        eveniet porro eligendi quisquam repudiandae amet pariatur veritatis,
        ipsa deleniti sint sit dolore odio, aspernatur soluta harum ex ipsam
        mollitia! Ipsam delectus quibusdam omnis vel. Totam deserunt veritatis
        iusto exercitationem quas numquam impedit corporis ipsum. Corporis
        veniam fuga facere molestias hic qui voluptates fugiat quam accusamus
        velit alias debitis ratione, ad aperiam dolorem obcaecati mollitia
        magnam tenetur enim in neque? Laboriosam maiores nobis exercitationem
        facilis, iste perspiciatis molestias dolores odit aliquid saepe, laborum
        nesciunt natus, perferendis tempora at alias? Temporibus recusandae at
        eius atque culpa modi accusantium dolores earum harum laudantium fuga
        expedita ducimus impedit voluptatem itaque illum, cum nam obcaecati
        quidem magni, non quae asperiores fugiat quas! Necessitatibus, facilis?
        Officiis reiciendis nam quasi laudantium eaque dolorem rerum soluta
        sapiente eum veritatis architecto nemo, at, autem, fugit ducimus?
        Architecto omnis voluptate officiis obcaecati, tempora id ut numquam
        nemo incidunt nam consequuntur, dignissimos fuga veniam? Iste ipsum
        impedit laudantium illum a, minus temporibus odio dolorem, facere optio
        dolor tempore vero, nostrum quia aut voluptate? Quos impedit earum
        cumque dolore nam voluptas, excepturi, numquam iste possimus aliquid
        error fuga architecto accusantium labore delectus? Pariatur impedit
        repudiandae neque dolor modi quod reprehenderit fuga, blanditiis,
        repellat quasi quae rem ipsam laborum ipsum omnis vitae ab earum
        exercitationem ea. Harum labore, eius unde quisquam temporibus adipisci
        sequi, ducimus neque veritatis ut, repudiandae incidunt tempora
        voluptate perspiciatis? Non quaerat amet accusantium tempore labore
        earum sapiente? Assumenda debitis totam odit ab corrupti, nemo, veniam
        necessitatibus excepturi perferendis laudantium dicta libero mollitia
        aut illum quisquam! Totam deserunt et eos qui exercitationem nesciunt ea
        obcaecati reiciendis aliquid, ut dolor eligendi ratione sequi odit
        cupiditate natus in repudiandae velit. Reiciendis maiores esse rem ea
        iusto temporibus expedita laudantium alias libero pariatur officia
        possimus incidunt perspiciatis, magnam, dolor sunt maxime. Totam,
        distinctio! Vero optio suscipit exercitationem. Deserunt quam inventore
        ab vitae totam illum aliquam, saepe officia iusto impedit, fugit odit
        suscipit doloribus sed quas atque. Nam quos ex iusto. Modi quasi
        voluptatibus assumenda. Ut accusamus cumque vero molestias voluptatem,
        aut ab. Debitis molestias culpa odio eius. Exercitationem dicta ad dolor
        velit in accusamus sit dolore, laboriosam voluptatum minima soluta neque
        ea deserunt repellendus provident ipsam sequi! Necessitatibus debitis
        tenetur voluptatibus nisi explicabo vitae doloremque quo illum ipsum
        doloribus autem ad hic labore, dignissimos voluptas architecto optio
        fugiat provident? Laborum inventore, atque molestias quis ab quasi
        placeat voluptates! Facilis vero inventore perspiciatis et soluta
        consectetur tempora aliquid magnam tenetur saepe, amet quisquam
        nesciunt? Aspernatur, temporibus illo nulla fugiat dolor, beatae, iure
        repellat dignissimos debitis optio autem exercitationem laboriosam
        impedit. Qui voluptatum voluptas esse ad quidem facere, rem magnam
        officia saepe! Magni, suscipit? Architecto nisi voluptatem quia eligendi
        dicta incidunt explicabo aperiam adipisci quas sapiente quod in libero
        officiis eos nam nostrum reiciendis dignissimos non maiores ullam
        consectetur, voluptate porro qui. Laudantium tempore harum ducimus cum?
        Excepturi, molestiae! Dolores modi soluta laudantium praesentium
        nesciunt suscipit aut.
      </p>
    </>
  );
}
