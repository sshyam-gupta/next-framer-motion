export default () => (
  <div>
    <section className="container mx-auto px-6 p-10">
      <div className="flex items-center flex-wrap mb-10">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Stacks</h4>
          <p className="text-gray-600 mb-8">
            Stacks is an easy to use task manager that helps to organize your
            tasks in an elegant and intuitive way. Using a kanban paradigm for
            managing your projects Stacks offers a flexible and visual way to
            organize tasks with ease.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/undraw_mobile_feed_73bd.svg"
            className="w-2/3"
            alt="Stacks"
          />
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/undraw_design_notes_8dmv.svg"
            className="w-2/3"
            alt="Scamlord.ai"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Scamlord.ai</h4>
          <p className="text-gray-600 mb-8">
            Scamlord.ai is a web app that helps renters reduce their risk of a
            rental scam by detecting fake rental listings. The tool validates
            the contact information used on a listing by checking against common
            behavioral patterns used by rental scammers.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-10">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">easyping</h4>
          <p className="text-gray-600 mb-8">
            Every minute we check whether your website works using servers in
            eight cities across seven countries 🌏. Receive Slack, e-mail and
            SMS notifications in the same minute when something just isn't
            working properly.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/undraw_among_nature_p1xb.svg"
            className="w-2/3"
            alt="easyping"
          />
        </div>
      </div>
    </section>
  </div>
);
