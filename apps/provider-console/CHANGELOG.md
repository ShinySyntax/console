

## 1.36.0 (2026-02-11)


### Features

* account overview, auto reload, and separate payment method page  ([46b0a99](https://github.com/ShinySyntax/console/commit/46b0a99e66be7beab0e1908f687cece6880aa268)), closes [#1779](https://github.com/ShinySyntax/console/issues/1779)
* add calendar and date-range-picker ui components ([cc96f0f](https://github.com/ShinySyntax/console/commit/cc96f0f71ea9078f39775623144058785b745e6c))
* adds api background-jobs server setup ([#1833](https://github.com/ShinySyntax/console/issues/1833)) ([d3e6214](https://github.com/ShinySyntax/console/commit/d3e6214800722fafd872a876ddaff0591a6e6dd8))
* adds api for password authentication via auth0 ([#2333](https://github.com/ShinySyntax/console/issues/2333)) ([f8d2a9a](https://github.com/ShinySyntax/console/commit/f8d2a9a9136c688bc07d503e4042687bb54c3949))
* adds feature flags support to console-api's notifications proxy ([#1472](https://github.com/ShinySyntax/console/issues/1472)) ([c663c55](https://github.com/ShinySyntax/console/commit/c663c552cb1d03e38fcf13efc2b89086cf7c4585))
* adds forget password form to embedded login page ([#2372](https://github.com/ShinySyntax/console/issues/2372)) ([cd51331](https://github.com/ShinySyntax/console/commit/cd51331e9bb2089de69751f527ca565512477d9b))
* adds possibility to pass multiple env variables into Env variable popup ([#1501](https://github.com/ShinySyntax/console/issues/1501)) ([9f7c89e](https://github.com/ShinySyntax/console/commit/9f7c89e1c4363fe80b5d5ddeeef1bd0e4f0d2faf))
* adds safe node packages installation ([#1726](https://github.com/ShinySyntax/console/issues/1726)) ([37acfee](https://github.com/ShinySyntax/console/commit/37acfee5c1d053cec2316560ad220992d70b7cbf)), closes [#1549](https://github.com/ShinySyntax/console/issues/1549)
* **analytics:** add financial endpoint ([#579](https://github.com/ShinySyntax/console/issues/579)) ([92dc463](https://github.com/ShinySyntax/console/commit/92dc463d54629ef06d35798b9d4b347ab1ff4f92))
* **analytics:** integrates amplitude ([c88ff59](https://github.com/ShinySyntax/console/commit/c88ff59c19c0096916afa3774b2d15a1bd30d3eb))
* **auth:** enhance API key management with new hooks and tests ([#1813](https://github.com/ShinySyntax/console/issues/1813)) ([ebfcbbe](https://github.com/ShinySyntax/console/commit/ebfcbbe50812fb683e5e43136bb4147da85e75a9))
* **auth:** implement verification email re-send and rework relevant UI ([#676](https://github.com/ShinySyntax/console/issues/676)) ([c2de6a6](https://github.com/ShinySyntax/console/commit/c2de6a6f92dbb44b1758836f2a42de8eb81f4c94)), closes [#663](https://github.com/ShinySyntax/console/issues/663)
* **auth:** implements managed wallet API JWT auth  ([06b4e45](https://github.com/ShinySyntax/console/commit/06b4e4540433b3b55fbc31f76d955e05e040a82e))
* **billing:** add billing module with trial wallet creation ([d1ca550](https://github.com/ShinySyntax/console/commit/d1ca550ae3d94e08de15f2d329ed6f81d192653b)), closes [#247](https://github.com/ShinySyntax/console/issues/247)
* **billing:** add stripe charges table list to usage ui  ([81e9d42](https://github.com/ShinySyntax/console/commit/81e9d42d254bee6248451aecde8868ccbf018d89))
* **billing:** add usage ui ([77b5d42](https://github.com/ShinySyntax/console/commit/77b5d42aaf4e153a6fe9f6723567520434f3d25b))
* **billing:** implement charges csv export  ([cbb3570](https://github.com/ShinySyntax/console/commit/cbb3570a50876908c01006582a930590cf87f87d))
* **billing:** implement managed wallet top up ([04f5aad](https://github.com/ShinySyntax/console/commit/04f5aad51079bea8c8d58c2147c78598b5bb409d)), closes [#247](https://github.com/ShinySyntax/console/issues/247)
* **billing:** stripe integration ([#1443](https://github.com/ShinySyntax/console/issues/1443)) ([85c046b](https://github.com/ShinySyntax/console/commit/85c046b1f7286b6c5fea41251712b3e89f413163))
* chain sdk next web ([#2050](https://github.com/ShinySyntax/console/issues/2050)) ([1bc10ea](https://github.com/ShinySyntax/console/commit/1bc10ea201360054e53d65a21f845f22d842352b))
* **console:** Add config from awesome akash for SSH toggle ([#301](https://github.com/ShinySyntax/console/issues/301)) ([8765a4f](https://github.com/ShinySyntax/console/commit/8765a4fe5123c868bacfa9c59cd0b6209a85224e))
* **console:** add metamask ([#334](https://github.com/ShinySyntax/console/issues/334)) ([bc68df8](https://github.com/ShinySyntax/console/commit/bc68df8fe87c310f406663a73444f918d272422b))
* **console:** balance authz deployments ([#359](https://github.com/ShinySyntax/console/issues/359)) ([abdb18a](https://github.com/ShinySyntax/console/commit/abdb18a42af81e7e1724b7afbe8eb2b898b47f41))
* **console:** managed wallets popup confirmation ([#342](https://github.com/ShinySyntax/console/issues/342)) ([c7d16d6](https://github.com/ShinySyntax/console/commit/c7d16d6a0d942cef8e64c6978d9ff565a0336c0d))
* **contact-point:** implements list ui ([b9d8c24](https://github.com/ShinySyntax/console/commit/b9d8c24eb826897a4462949503b30ef6134a3bc7))
* **contact-point:** implements unleash feature flagging and contact creation ui ([6ad02ce](https://github.com/ShinySyntax/console/commit/6ad02ce382dc76b9d317aa3934416da3605ad53b))
* **deployment:** clean up trial deployments for a provider ([41018af](https://github.com/ShinySyntax/console/commit/41018afc0593621c4627369b9f114f849e249e44)), closes [#502](https://github.com/ShinySyntax/console/issues/502)
* **deployment:** implement ato top up setting ([1301314](https://github.com/ShinySyntax/console/commit/130131485a68f699587415f96283e0dc83072502)), closes [#412](https://github.com/ShinySyntax/console/issues/412)
* **deployment:** implement plain linux deployment page ([6da5565](https://github.com/ShinySyntax/console/commit/6da5565c049ab9f9debace6e42ec976347b6b3a0)), closes [#227](https://github.com/ShinySyntax/console/issues/227)
* **deployment:** implement trial deployment badge ([#1764](https://github.com/ShinySyntax/console/issues/1764)) ([3e2fdae](https://github.com/ShinySyntax/console/commit/3e2fdaee9f03bb95235f1f3171665111004807f8))
* **deployment:** implements custodial deployments top up data collection ([108f073](https://github.com/ShinySyntax/console/commit/108f0736359cc866bb9aa01e3935105c413c8aae)), closes [#39](https://github.com/ShinySyntax/console/issues/39)
* **deployment:** implements deploy button flow ([46004d4](https://github.com/ShinySyntax/console/commit/46004d4429dc3b4ebb47bb88edf97cd99b1a0c0f)), closes [#2470](https://github.com/ShinySyntax/console/issues/2470)
* **deployment:** improve new deployment page ([3ffc38b](https://github.com/ShinySyntax/console/commit/3ffc38b2e942f11fc1ab11624aaa653745de6637)), closes [#444](https://github.com/ShinySyntax/console/issues/444)
* **deployment:** managed wallet api update deployment ([#1093](https://github.com/ShinySyntax/console/issues/1093)) ([6998834](https://github.com/ShinySyntax/console/commit/699883436cc1763a20f65cce17390403107b179a))
* disable some features when blockchain is down ([#1971](https://github.com/ShinySyntax/console/issues/1971)) ([64d5bef](https://github.com/ShinySyntax/console/commit/64d5befefc09479a09d5e1a829c9004ab2d6470e))
* displays first lease service uri on deployment list if deployment name is unknown and small UX improvements ([#924](https://github.com/ShinySyntax/console/issues/924)) ([f3e9b8d](https://github.com/ShinySyntax/console/commit/f3e9b8d96878fab4cc89c37a2ad7747ab844c1b1))
* enables sentry sourcemaps in deploy-web ([#1800](https://github.com/ShinySyntax/console/issues/1800)) ([f7c83bf](https://github.com/ShinySyntax/console/commit/f7c83bf749199d17e9d9b8cb7c2f7a3413a59887))
* **env:** implement unified file loading in console-web ([12f282a](https://github.com/ShinySyntax/console/commit/12f282aa2798d9597a9f950520fb19d174cb635e)), closes [#313](https://github.com/ShinySyntax/console/issues/313)
* extract custom components ([#256](https://github.com/ShinySyntax/console/issues/256)) ([2d3e889](https://github.com/ShinySyntax/console/commit/2d3e8898f5d6e081f49da3ae5892023317f0b6e7))
* extract UI components shadcn ([#239](https://github.com/ShinySyntax/console/issues/239)) ([f2da963](https://github.com/ShinySyntax/console/commit/f2da963b4b56e6e006959216f35ca8cd7a4fb4f6))
* improve provider leases graph ([#246](https://github.com/ShinySyntax/console/issues/246)) ([f5fe74e](https://github.com/ShinySyntax/console/commit/f5fe74e15d6b3d7fbccb28de141451ced5336823))
* init provider console with next, tailwind and shadcn ([#243](https://github.com/ShinySyntax/console/issues/243)) ([8afb22d](https://github.com/ShinySyntax/console/commit/8afb22da7228d83b75201ab23155a3c1d463fc82))
* introduce multi-line commands ([e58349b](https://github.com/ShinySyntax/console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/ShinySyntax/console/issues/175)
* jwt provider schema ([#1312](https://github.com/ShinySyntax/console/issues/1312)) ([379a2d3](https://github.com/ShinySyntax/console/commit/379a2d3ceb519e8b49c75373b8aa7a4a735bf599))
* merge "Upload SDL" to "Build your template" and add "Plain Linux" template ([#244](https://github.com/ShinySyntax/console/issues/244)) ([0edf499](https://github.com/ShinySyntax/console/commit/0edf4992b6e01f6243ab226f2666ec4e05c312e4))
* **network:** adjusts indexer for sdk53 network upgrade ([dfc7d05](https://github.com/ShinySyntax/console/commit/dfc7d05123a52470fb527908c935c1ee12f66da5))
* **notifications:** adds basic alerts service ([5d4d6fc](https://github.com/ShinySyntax/console/commit/5d4d6fcf23ceb2b317453a001d4043855df5c5d1))
* **onboarding:** welcome step create deployment ([#2170](https://github.com/ShinySyntax/console/issues/2170)) ([47c2a91](https://github.com/ShinySyntax/console/commit/47c2a91aea877d4a06ea7953b20f3fa31151b0dd))
* provider deployments on provider console ([#416](https://github.com/ShinySyntax/console/issues/416)) ([62374e1](https://github.com/ShinySyntax/console/commit/62374e15d4e02ffa9f44080a2d41a676b403d70b))
* **provider:** added auto attributes, fixed issue on activity-logs ([#872](https://github.com/ShinySyntax/console/issues/872)) ([309922b](https://github.com/ShinySyntax/console/commit/309922ba65013363c024ff7ace1f00d2bfe64004))
* **provider:** added cicd ([#706](https://github.com/ShinySyntax/console/issues/706)) ([a3e3ec3](https://github.com/ShinySyntax/console/commit/a3e3ec356d103a71a465a725d20faec1ecdc15c3))
* **provider:** added disconnect button for control machines ([#996](https://github.com/ShinySyntax/console/issues/996)) ([dd1bc74](https://github.com/ShinySyntax/console/commit/dd1bc74832ae889298ea0cfa6f7234cb935ae33c))
* **provider:** added node upgrade button in settings ([#1007](https://github.com/ShinySyntax/console/issues/1007)) ([98fa7fb](https://github.com/ShinySyntax/console/commit/98fa7fb87a2f36ff4cc7846c01f99f5be5ed04e3))
* **provider:** added port and DNS checker screen ([#1112](https://github.com/ShinySyntax/console/issues/1112)) ([8e97e08](https://github.com/ShinySyntax/console/commit/8e97e08863aebaafdcd2f9e525f76ce3d144947b))
* **provider:** added upgrade button for provider ([#1110](https://github.com/ShinySyntax/console/issues/1110)) ([c2d7512](https://github.com/ShinySyntax/console/commit/c2d751233e4b4779e584761392bf0175e8c8ee1c))
* **provider:** added version to sidebar ([#897](https://github.com/ShinySyntax/console/issues/897)) ([5a3bef5](https://github.com/ShinySyntax/console/commit/5a3bef5803bcc0c452fa888e9aaee99e32f54e45))
* **provider:** changed user field non editable and default to root ([#740](https://github.com/ShinySyntax/console/issues/740)) ([5a81826](https://github.com/ShinySyntax/console/commit/5a8182611baec310d2ba3243449e740841ca4f75))
* **provider:** control-machine add/edit - online/offline functionality ([#447](https://github.com/ShinySyntax/console/issues/447)) ([ec70124](https://github.com/ShinySyntax/console/commit/ec70124ad2a414f5bda37d9a047cef8e9e98ec51))
* **provider:** converted monthly pricing to hourly pricing ([#896](https://github.com/ShinySyntax/console/issues/896)) ([c6e21c7](https://github.com/ShinySyntax/console/commit/c6e21c7cc3a3395c31b95a298fa73c2748eeec0e))
* **provider:** extract chain env variable for sandbox env ([#1970](https://github.com/ShinySyntax/console/issues/1970)) ([9050c0b](https://github.com/ShinySyntax/console/commit/9050c0b584eee36e430f2ed572c9cb693f9ce62f))
* **provider:** new and improved home page for non provider ([#531](https://github.com/ShinySyntax/console/issues/531)) ([9c6cddf](https://github.com/ShinySyntax/console/commit/9c6cddfeafd0ba95e9feb877239560d88833af3a))
* **provider:** new provider trial endpoint ([2712e38](https://github.com/ShinySyntax/console/commit/2712e380b8f5af0930abbdf9347a1dee3eb75f8a)), closes [#488](https://github.com/ShinySyntax/console/issues/488)
* **provider:** node management with changes to create cluster ([#1167](https://github.com/ShinySyntax/console/issues/1167)) ([ef79ff6](https://github.com/ShinySyntax/console/commit/ef79ff6c500350bf014183c7101d3f5cf6190d3a))
* **provider:** persistent storage ([#493](https://github.com/ShinySyntax/console/issues/493)) ([7125f88](https://github.com/ShinySyntax/console/commit/7125f8857845c5b44009b15b882d2e5ae3e293b1))
* **provider:** provider attributes and actions ([#451](https://github.com/ShinySyntax/console/issues/451)) ([6dfaf3b](https://github.com/ShinySyntax/console/commit/6dfaf3bc28ab741c680aece89268065c69853477))
* **provider:** provider pricing feature ([#475](https://github.com/ShinySyntax/console/issues/475)) ([14d73fa](https://github.com/ShinySyntax/console/commit/14d73fa4c3b099e9d530db76949394e16557aa73))
* **provider:** sdk 53 upgrade and cleanup dead code ([#1989](https://github.com/ShinySyntax/console/issues/1989)) ([f86e600](https://github.com/ShinySyntax/console/commit/f86e6003899c07fff66b8196dec03c0ed74d8342))
* **provider:** settings feature ([#476](https://github.com/ShinySyntax/console/issues/476)) ([bd487a8](https://github.com/ShinySyntax/console/commit/bd487a87f6ca6a390c112a8e4296af8d35fffe2b))
* **provider:** test and audit instruction for non-audited providers ([#1111](https://github.com/ShinySyntax/console/issues/1111)) ([5ac9fe4](https://github.com/ShinySyntax/console/commit/5ac9fe48211683a71953d76b4768be26620f163e))
* **provider:** uninstall provider using console ([#1341](https://github.com/ShinySyntax/console/issues/1341)) ([cc37e35](https://github.com/ShinySyntax/console/commit/cc37e355879370d89c7a944fb097bd27685a457b))
* **provider:** wp: api key page ([#1497](https://github.com/ShinySyntax/console/issues/1497)) ([21c9c9d](https://github.com/ShinySyntax/console/commit/21c9c9d260d665027bb9a19f757fdb474c4f3841))
* **release:** implement release with image build ([a9fa7e8](https://github.com/ShinySyntax/console/commit/a9fa7e80b373af4ca90438292f582e661680fb2d))
* shared packages ([#237](https://github.com/ShinySyntax/console/issues/237)) ([bd79006](https://github.com/ShinySyntax/console/commit/bd79006abff3ee2d06657269ddd0e76d1554f275))
* **styling:** improve sidebar ([#1344](https://github.com/ShinySyntax/console/issues/1344)) ([77e88dd](https://github.com/ShinySyntax/console/commit/77e88dd9a61b0d38ded8e108a58a6de093a29de7))
* update frontend styling and theme ([#2331](https://github.com/ShinySyntax/console/issues/2331)) ([0ae3a55](https://github.com/ShinySyntax/console/commit/0ae3a557181a0eecaa3cdcf27d48513c0c09f79f))
* upgrade Node.js to 24.11.1 LTS ([#2223](https://github.com/ShinySyntax/console/issues/2223)) ([d9feb09](https://github.com/ShinySyntax/console/commit/d9feb090d45408ec9835216bfc5c6fb3f1329abc))
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/ShinySyntax/console/issues/1095)) ([8533b35](https://github.com/ShinySyntax/console/commit/8533b355762016829c4435fd67c7885df79b251e))
* **wallet:** improve coupon codes ux ([#1028](https://github.com/ShinySyntax/console/issues/1028)) ([b4a81c7](https://github.com/ShinySyntax/console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))
* **wallet:** improve fiat payments ux ([295e085](https://github.com/ShinySyntax/console/commit/295e08542deb57634de624c5815e1e7127333a16)), closes [#411](https://github.com/ShinySyntax/console/issues/411)


### Bug Fixes

* akashnet twitter handle ([#2125](https://github.com/ShinySyntax/console/issues/2125)) ([10b4d28](https://github.com/ShinySyntax/console/commit/10b4d280eac5173661688805841499314e8e1cc8))
* **billing:** auto credit reload ui and setting update ([#2409](https://github.com/ShinySyntax/console/issues/2409)) ([d0f0fb8](https://github.com/ShinySyntax/console/commit/d0f0fb8c3247b4c29aba50cd7ec2ae6b2fa6854e))
* change deployment details error ([#784](https://github.com/ShinySyntax/console/issues/784)) ([a0971ac](https://github.com/ShinySyntax/console/commit/a0971ac787dfc5dea0029ead0b684edb450e66cf))
* checkbox can optionally have a larger clickable wrapper  ([e3c51dd](https://github.com/ShinySyntax/console/commit/e3c51ddd7e1fa25d5933ad4dd5b8b58d9ac23a34)), closes [#1981](https://github.com/ShinySyntax/console/issues/1981)
* correct typos and formatting issues ([#2221](https://github.com/ShinySyntax/console/issues/2221)) ([28e7a98](https://github.com/ShinySyntax/console/commit/28e7a98d2a9f8a8cdefb6b538307c1ec4f34cf55))
* **deployment:** handles invalid manifest errors on POST /v1/leases ([f5da5c4](https://github.com/ShinySyntax/console/commit/f5da5c4b02ef3e2977a8f5855eb5a8b81ac8281b)), closes [#1835](https://github.com/ShinySyntax/console/issues/1835)
* **deployment:** managed wallet user template ([ab83f2f](https://github.com/ShinySyntax/console/commit/ab83f2f699e84b3a4f90739d2d003a9f8e9d27aa)), closes [#483](https://github.com/ShinySyntax/console/issues/483)
* **deployment:** managed walllet fixes ([#382](https://github.com/ShinySyntax/console/issues/382)) ([4a43483](https://github.com/ShinySyntax/console/commit/4a4348390c56d0f2794b6689cf19ef84edaf9c54))
* **deployment:** validate max deposit amount correctly ([44c0274](https://github.com/ShinySyntax/console/commit/44c02745635510b8b5eb6bb4f9462b232543f393)), closes [#603](https://github.com/ShinySyntax/console/issues/603)
* disables nodejs auto family selection ([#1212](https://github.com/ShinySyntax/console/issues/1212)) ([c6be104](https://github.com/ShinySyntax/console/commit/c6be104cf583a07d20fb9f92661ffa29e23b492a))
* docker node permissions ([#1410](https://github.com/ShinySyntax/console/issues/1410)) ([073b43a](https://github.com/ShinySyntax/console/commit/073b43aa1f89192bd9f96193f7d721d34840a441))
* ensure next uses app version as sentry release number ([#1634](https://github.com/ShinySyntax/console/issues/1634)) ([68a86d1](https://github.com/ShinySyntax/console/commit/68a86d1f448af8a4ba1d20c76a97f7026664f40c))
* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/ShinySyntax/console/issues/1070)) ([e1053c4](https://github.com/ShinySyntax/console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* ensure that akash prebuilt templates exist in the final docker image ([#1020](https://github.com/ShinySyntax/console/issues/1020)) ([2a940a3](https://github.com/ShinySyntax/console/commit/2a940a349a85182f88fb8a83990bf3a78b0bab3f))
* ensure that tsbuild picks proper dependencies for internal packages ([#2596](https://github.com/ShinySyntax/console/issues/2596)) ([c869c78](https://github.com/ShinySyntax/console/commit/c869c78a19e7a6569d62bf1cdd2ab5be0340cdd6))
* ensures provider-proxy has valid blockchain API_URL on sandbox env ([#1032](https://github.com/ShinySyntax/console/issues/1032)) ([325461e](https://github.com/ShinySyntax/console/commit/325461e684a547669ac9765a3ac378ceadb86ee1))
* fallbacks to `local` if DEPLOYMENT_ENV is not specified ([#1029](https://github.com/ShinySyntax/console/issues/1029)) ([f9bc424](https://github.com/ShinySyntax/console/commit/f9bc4242900c58b0bd519e5c755616aedccfb71b))
* fixes e2e tests and adds closeDeployments script ([#1446](https://github.com/ShinySyntax/console/issues/1446)) ([92d7389](https://github.com/ShinySyntax/console/commit/92d73895ff9f8422929365d3e4dfda10f6982796))
* fixes warnings in ui package ([#979](https://github.com/ShinySyntax/console/issues/979)) ([3279d94](https://github.com/ShinySyntax/console/commit/3279d948179edd5473fd507ebb66c8532616c774))
* ignore errors in SQL formatting ([#1630](https://github.com/ShinySyntax/console/issues/1630)) ([ad21ab0](https://github.com/ShinySyntax/console/commit/ad21ab0e8c581db930d6e5987de9492a8d717f6d))
* install sharp lib for image optimization ([#2546](https://github.com/ShinySyntax/console/issues/2546)) ([4790cd6](https://github.com/ShinySyntax/console/commit/4790cd6ff2053229ec6faaad26a7e18d67e60f74))
* make date range picker scrollable if it overflows container ([ac6f2a8](https://github.com/ShinySyntax/console/commit/ac6f2a87cea5eecfe5696c15af38bec09027087a))
* name and right button link to deployment page, not the whole line ([3ea1f04](https://github.com/ShinySyntax/console/commit/3ea1f0433cac42d13ce80d5c8e092519da423963)), closes [#1981](https://github.com/ShinySyntax/console/issues/1981)
* **observability:** make sure otl data is added to logs ([820870d](https://github.com/ShinySyntax/console/commit/820870d43203ddec5d3cd101d5c46b4b67e1d16d))
* **provider:** added akash install step in manual wallet import part ([#875](https://github.com/ShinySyntax/console/issues/875)) ([d8a21bd](https://github.com/ShinySyntax/console/commit/d8a21bdb1f63cdb4ccc6e1de151fec9bde080476))
* **provider:** added chart upgrade button for helm chart version update ([#1035](https://github.com/ShinySyntax/console/issues/1035)) ([a7e3931](https://github.com/ShinySyntax/console/commit/a7e39311e32563efd64a9b6b1e8657b789139ff8))
* **provider:** added loading for api-key get call ([#1792](https://github.com/ShinySyntax/console/issues/1792)) ([9552aa2](https://github.com/ShinySyntax/console/commit/9552aa2c711c0613b2efd92d4db2aae75abf328f))
* **provider:** added missing passphrase field in final request ([#864](https://github.com/ShinySyntax/console/issues/864)) ([98dfc89](https://github.com/ShinySyntax/console/commit/98dfc892d93c4db40e8bae7c18d8743ad5c68d69))
* **provider:** added missing prop passphrase ([#867](https://github.com/ShinySyntax/console/issues/867)) ([8a38776](https://github.com/ShinySyntax/console/commit/8a3877685bd046d828b53060996ba963e765c51b))
* **provider:** added missing types and added error handling ([#751](https://github.com/ShinySyntax/console/issues/751)) ([aee3589](https://github.com/ShinySyntax/console/commit/aee35895d9d632194907c9f04f5d50b7d0f52b58))
* **provider:** added redirect once we have a success on network upgrade ([#1016](https://github.com/ShinySyntax/console/issues/1016)) ([09c276a](https://github.com/ShinySyntax/console/commit/09c276a27f841dd6f43a1c4bf5dcb1b31a448b63))
* **provider:** better error handling on non provider calls (404 error) ([#813](https://github.com/ShinySyntax/console/issues/813)) ([3180198](https://github.com/ShinySyntax/console/commit/31801989e7f0703df121957ddb80998adedd8042))
* **provider:** change dynamic message for signing ([#778](https://github.com/ShinySyntax/console/issues/778)) ([7cbc421](https://github.com/ShinySyntax/console/commit/7cbc4213ac42bd4220e2af1828840e5189e65e5b))
* **provider:** changed internal to v1 for provider-dashboard api call ([#1398](https://github.com/ShinySyntax/console/issues/1398)) ([d9ee9e6](https://github.com/ShinySyntax/console/commit/d9ee9e6cfd8c292ae24a375022689bb3a54abfab))
* **provider:** changed upgrade status api to fix upgrade checks ([#1082](https://github.com/ShinySyntax/console/issues/1082)) ([0978a09](https://github.com/ShinySyntax/console/commit/0978a09805eed45af4dca7757d3d917883fe7874))
* **provider:** control machine disconnect on different wallet connect ([#773](https://github.com/ShinySyntax/console/issues/773)) ([724bc1e](https://github.com/ShinySyntax/console/commit/724bc1ed38bf3108b477c9e3a5e2e9406e4b141e))
* **provider:** Copy changes and refactor some components ([#530](https://github.com/ShinySyntax/console/issues/530)) ([c5efbff](https://github.com/ShinySyntax/console/commit/c5efbff4bb45ea7eac58c174ca1456a70f2ae556))
* **provider:** fix control machine error and added cta button ([#1109](https://github.com/ShinySyntax/console/issues/1109)) ([4a78637](https://github.com/ShinySyntax/console/commit/4a786372fb01431566782760762978947790a4f5))
* **provider:** fix ga and color bug ([#763](https://github.com/ShinySyntax/console/issues/763)) ([bff0985](https://github.com/ShinySyntax/console/commit/bff09851ebe769fad01bc3705ab2d258d8e47bd9))
* **provider:** fixed loading issue on some pages, fixed some guides ([#939](https://github.com/ShinySyntax/console/issues/939)) ([5054b19](https://github.com/ShinySyntax/console/commit/5054b192e7a656bc82fa3b22862bea090f13e02c))
* **provider:** fixed non provider login issue ([#879](https://github.com/ShinySyntax/console/issues/879)) ([1d571a5](https://github.com/ShinySyntax/console/commit/1d571a5725e18b791c77ce50d6066755901e2f5b))
* **provider:** fixed onchain error and blank client error on retry provider process ([#848](https://github.com/ShinySyntax/console/issues/848)) ([c354e77](https://github.com/ShinySyntax/console/commit/c354e77f065d411441424787d30188e800053737))
* **provider:** fixed ordering on control node and worker node and cal… ([#1199](https://github.com/ShinySyntax/console/issues/1199)) ([50ba064](https://github.com/ShinySyntax/console/commit/50ba064593421bcfacbab4ddb520a5d8fa7b2f7f))
* **provider:** fixed persistent storage ui issue ([#754](https://github.com/ShinySyntax/console/issues/754)) ([36c363c](https://github.com/ShinySyntax/console/commit/36c363c69bceaba856d70a28b8537171027a6304))
* **provider:** fixed provider pricing page where issue when no gpus ([#982](https://github.com/ShinySyntax/console/issues/982)) ([5464ec0](https://github.com/ShinySyntax/console/commit/5464ec058a5ea91c6d19e23cf35ff3b2d68943f3))
* **provider:** fixed token issue and actionDetails issue ([#852](https://github.com/ShinySyntax/console/issues/852)) ([48d58f4](https://github.com/ShinySyntax/console/commit/48d58f4b3eecbe469f96bc4df0d8f9d5bbde80ea))
* **provider:** general ui fixes ([#708](https://github.com/ShinySyntax/console/issues/708)) ([e443868](https://github.com/ShinySyntax/console/commit/e443868253f5be7c1be77732aacd03c8e7cd7d85))
* **provider:** online status changed and control-machine changed ([#1310](https://github.com/ShinySyntax/console/issues/1310)) ([0566fb2](https://github.com/ShinySyntax/console/commit/0566fb24916c8c60144661fd8ef6f47bd180ef05))
* **provider:** styling issue fixed in dark mode ([#1216](https://github.com/ShinySyntax/console/issues/1216)) ([175d513](https://github.com/ShinySyntax/console/commit/175d5136fc073c8262b8de20e462f73abbc7d6c2))
* **provider:** updated provider pricing decimals before sending ([#998](https://github.com/ShinySyntax/console/issues/998)) ([22d25f7](https://github.com/ShinySyntax/console/commit/22d25f7f660a7d256a13012ad582772892f4219e))
* **release:** adds notifications to docker setup  ([6951faf](https://github.com/ShinySyntax/console/commit/6951faf46850643515757c7c16c328bbf622fa76))
* **release:** builds notifications image w/o nginx ([d68bf9a](https://github.com/ShinySyntax/console/commit/d68bf9a94c118aa65656e15924163ba9d54a4e2b))
* **release:** triggers release  ([cd59471](https://github.com/ShinySyntax/console/commit/cd594718d29ec1f7d1de13071fb2e999b5b8a088))
* removed apaexcharts from provider console ([#626](https://github.com/ShinySyntax/console/issues/626)) ([b390b35](https://github.com/ShinySyntax/console/commit/b390b353b66522d3fdd9634430ac9c3150de2fce))
* removed apex charts from the provider console repo ([#630](https://github.com/ShinySyntax/console/issues/630)) ([e48d6de](https://github.com/ShinySyntax/console/commit/e48d6de306d0299259ebe93c4e42f72a0d287cae))
* replaces fetch API with octokit.getContent ([#2570](https://github.com/ShinySyntax/console/issues/2570)) ([079f0d4](https://github.com/ShinySyntax/console/commit/079f0d4640aa3936d6ef337e46ae4bcb2a8104d4))
* set timestamp setting in env-loader ([#2594](https://github.com/ShinySyntax/console/issues/2594)) ([ab74ab0](https://github.com/ShinySyntax/console/commit/ab74ab03465148ce9761e2f21408f33c6ac1c2e0))
* switch container build target to production ([#2647](https://github.com/ShinySyntax/console/issues/2647)) ([d583e61](https://github.com/ShinySyntax/console/commit/d583e615431f543ba84c1302efec9b878645acd8))
* sync email_verified from auth0 on demand  ([436e41a](https://github.com/ShinySyntax/console/commit/436e41a6a1dc2c39552192d2ae648b011ccb44e2))
* **template:** eliminates eternal loop when query if failing  ([ca93b51](https://github.com/ShinySyntax/console/commit/ca93b5123725394094aada5149811de548717d94))
* **ui:** fix tailwind.config.js content paths ([73de799](https://github.com/ShinySyntax/console/commit/73de799719ac916132dea08b2070e7d4b613fd26))
* update auth0 audience and issuer ([#1382](https://github.com/ShinySyntax/console/issues/1382)) ([6e66727](https://github.com/ShinySyntax/console/commit/6e667277a8c4f9ed787bcdc2094377fe4ae625b1))
* update nextjs version ([#1105](https://github.com/ShinySyntax/console/issues/1105)) ([5d24cd8](https://github.com/ShinySyntax/console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))
* updates @akashnetwork/akashjs ([#1575](https://github.com/ShinySyntax/console/issues/1575)) ([ae86837](https://github.com/ShinySyntax/console/commit/ae868378ae35db3342ff5d44f9d270644178c507))
* updates dockerfile for node apps ([#1068](https://github.com/ShinySyntax/console/issues/1068)) ([54194a0](https://github.com/ShinySyntax/console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))
* upgrades nextjs to latest 14.x ([#2345](https://github.com/ShinySyntax/console/issues/2345)) ([46d0b23](https://github.com/ShinySyntax/console/commit/46d0b2315f7aed4dabdc31f75dac964f43a4264d))
* upgrades nodejs to higher version ([#1563](https://github.com/ShinySyntax/console/issues/1563)) ([dac08eb](https://github.com/ShinySyntax/console/commit/dac08ebadcc29164eda2e76417ac85ec210ea1b0))
* wallet aware local storage and fixed error message on wallet screen ([#2350](https://github.com/ShinySyntax/console/issues/2350)) ([e16b45d](https://github.com/ShinySyntax/console/commit/e16b45d8fb28f6332a7b2c651c4ec88e1439cab3))


### Code Refactoring

* adds warmUpTemplatesCache script ([#962](https://github.com/ShinySyntax/console/issues/962)) ([46b37eb](https://github.com/ShinySyntax/console/commit/46b37eb632dc6da429da94b599160b2e587980c9))
* **authorization:** use react-table for deployment grants  ([cfd28ab](https://github.com/ShinySyntax/console/commit/cfd28aba79a349f17293a669f8104b8565db8e8d)), closes [#595](https://github.com/ShinySyntax/console/issues/595)
* **console:** remove address book feature from console ([605d0d5](https://github.com/ShinySyntax/console/commit/605d0d53524ffe35f7b1e0de6faf1d10886bff0c))
* defines explicit exports inside internal packages ([#2551](https://github.com/ShinySyntax/console/issues/2551)) ([71f907f](https://github.com/ShinySyntax/console/commit/71f907fe6b8b85a042bd351ec5b2b3621ba8d89d))
* **dx:** fix linting issues ([1115a60](https://github.com/ShinySyntax/console/commit/1115a609ba6a080e4c91331f45fb0d12b48c5504))
* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/ShinySyntax/console/issues/1074)) ([509fcd3](https://github.com/ShinySyntax/console/commit/509fcd39831311950afdfb51c189ef46b02c855f))
* enables strict types for ui package ([#953](https://github.com/ShinySyntax/console/issues/953)) ([216ac0e](https://github.com/ShinySyntax/console/commit/216ac0e59e739c34d1d7acb2e14fd1a9d94bc816))
* extracts tx signer into a dedicated service ([8a74b7e](https://github.com/ShinySyntax/console/commit/8a74b7e3346e5aee6249a6baeb3e91099db97677))
* **forms:** zod form validation and components ([#283](https://github.com/ShinySyntax/console/issues/283)) ([3b8279d](https://github.com/ShinySyntax/console/commit/3b8279d3b7e6f2f1160c26383a04cf775140f1b5))
* migrates from webpack to tsup in console-api ([#2547](https://github.com/ShinySyntax/console/issues/2547)) ([43c75c0](https://github.com/ShinySyntax/console/commit/43c75c07282b88c3776545a6134754ab97901734))
* move /v1/leases-duration/{owner} to modules ([#1440](https://github.com/ShinySyntax/console/issues/1440)) ([605bb55](https://github.com/ShinySyntax/console/commit/605bb55060546974c4c32970c6572d8b315533bd)), closes [#1280](https://github.com/ShinySyntax/console/issues/1280)
* moves trial authorization spending out of db transaction ([#1129](https://github.com/ShinySyntax/console/issues/1129)) ([8c8e372](https://github.com/ShinySyntax/console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))
* refactors services in console-web to strict types ([#1004](https://github.com/ShinySyntax/console/issues/1004)) ([fd85685](https://github.com/ShinySyntax/console/commit/fd85685858b64ead49a946955fe8da48ea9cc49b))
* removes sentry from console-api ([#1220](https://github.com/ShinySyntax/console/issues/1220)) ([8339158](https://github.com/ShinySyntax/console/commit/8339158321771e716cddd7de4242d7de370697d0))
* update react-query in provider-console ([#1002](https://github.com/ShinySyntax/console/issues/1002)) ([cd5b64a](https://github.com/ShinySyntax/console/commit/cd5b64adeac4d8774f44ef90b4802e69fea69cfe))
* uses logger and http sdk from local pkgs for notification service ([fe3539b](https://github.com/ShinySyntax/console/commit/fe3539b5995aca4f88fe281da5ac282779ee3f8e))

## [1.35.7](https://github.com/akash-network/console/compare/provider-console/v1.35.6...provider-console/v1.35.7) (2026-02-03)


### Bug Fixes

* switch container build target to production ([#2647](https://github.com/akash-network/console/issues/2647)) ([d583e61](https://github.com/akash-network/console/commit/d583e615431f543ba84c1302efec9b878645acd8))

## [1.35.6](https://github.com/akash-network/console/compare/provider-console/v1.35.5...provider-console/v1.35.6) (2026-01-30)


### Code Refactoring

* extracts tx signer into a dedicated service ([8a74b7e](https://github.com/akash-network/console/commit/8a74b7e3346e5aee6249a6baeb3e91099db97677))

## [1.35.5](https://github.com/akash-network/console/compare/provider-console/v1.35.3...provider-console/v1.35.5) (2026-01-30)


### Bug Fixes

* ensure that tsbuild picks proper dependencies for internal packages ([#2596](https://github.com/akash-network/console/issues/2596)) ([c869c78](https://github.com/akash-network/console/commit/c869c78a19e7a6569d62bf1cdd2ab5be0340cdd6))
* replaces fetch API with octokit.getContent ([#2570](https://github.com/akash-network/console/issues/2570)) ([079f0d4](https://github.com/akash-network/console/commit/079f0d4640aa3936d6ef337e46ae4bcb2a8104d4))
* set timestamp setting in env-loader ([#2594](https://github.com/akash-network/console/issues/2594)) ([ab74ab0](https://github.com/akash-network/console/commit/ab74ab03465148ce9761e2f21408f33c6ac1c2e0))


### Code Refactoring

* migrates from webpack to tsup in console-api ([#2547](https://github.com/akash-network/console/issues/2547)) ([43c75c0](https://github.com/akash-network/console/commit/43c75c07282b88c3776545a6134754ab97901734))

## [1.35.4](https://github.com/akash-network/console/compare/provider-console/v1.35.3...provider-console/v1.35.4) (2026-01-28)


### Bug Fixes

* replaces fetch API with octokit.getContent ([#2570](https://github.com/akash-network/console/issues/2570)) ([079f0d4](https://github.com/akash-network/console/commit/079f0d4640aa3936d6ef337e46ae4bcb2a8104d4))


### Code Refactoring

* migrates from webpack to tsup in console-api ([#2547](https://github.com/akash-network/console/issues/2547)) ([43c75c0](https://github.com/akash-network/console/commit/43c75c07282b88c3776545a6134754ab97901734))

## [1.35.3](https://github.com/akash-network/console/compare/provider-console/v1.35.2...provider-console/v1.35.3) (2026-01-26)


### Bug Fixes

* install sharp lib for image optimization ([#2546](https://github.com/akash-network/console/issues/2546)) ([4790cd6](https://github.com/akash-network/console/commit/4790cd6ff2053229ec6faaad26a7e18d67e60f74))

## [1.35.2](https://github.com/akash-network/console/compare/provider-console/v1.35.1...provider-console/v1.35.2) (2026-01-22)


### Code Refactoring

* defines explicit exports inside internal packages ([#2551](https://github.com/akash-network/console/issues/2551)) ([71f907f](https://github.com/akash-network/console/commit/71f907fe6b8b85a042bd351ec5b2b3621ba8d89d))

## [1.35.1](https://github.com/akash-network/console/compare/provider-console/v1.35.0...provider-console/v1.35.1) (2026-01-20)

## [1.35.0](https://github.com/akash-network/console/compare/provider-console/v1.34.1...provider-console/v1.35.0) (2026-01-13)


### Features

* **deployment:** implements deploy button flow ([46004d4](https://github.com/akash-network/console/commit/46004d4429dc3b4ebb47bb88edf97cd99b1a0c0f)), closes [#2470](https://github.com/akash-network/console/issues/2470)

## [1.34.1](https://github.com/akash-network/console/compare/provider-console/v1.34.0...provider-console/v1.34.1) (2025-12-23)


### Bug Fixes

* **billing:** auto credit reload ui and setting update ([#2409](https://github.com/akash-network/console/issues/2409)) ([d0f0fb8](https://github.com/akash-network/console/commit/d0f0fb8c3247b4c29aba50cd7ec2ae6b2fa6854e))

## [1.34.0](https://github.com/akash-network/console/compare/provider-console/v1.33.2...provider-console/v1.34.0) (2025-12-18)


### Features

* adds forget password form to embedded login page ([#2372](https://github.com/akash-network/console/issues/2372)) ([cd51331](https://github.com/akash-network/console/commit/cd51331e9bb2089de69751f527ca565512477d9b))
* update frontend styling and theme ([#2331](https://github.com/akash-network/console/issues/2331)) ([0ae3a55](https://github.com/akash-network/console/commit/0ae3a557181a0eecaa3cdcf27d48513c0c09f79f))

## [1.33.2](https://github.com/akash-network/console/compare/provider-console/v1.33.1...provider-console/v1.33.2) (2025-12-12)


### Bug Fixes

* wallet aware local storage and fixed error message on wallet screen ([#2350](https://github.com/akash-network/console/issues/2350)) ([e16b45d](https://github.com/akash-network/console/commit/e16b45d8fb28f6332a7b2c651c4ec88e1439cab3))

## [1.33.1](https://github.com/akash-network/console/compare/provider-console/v1.33.0...provider-console/v1.33.1) (2025-12-12)


### Bug Fixes

* upgrades nextjs to latest 14.x ([#2345](https://github.com/akash-network/console/issues/2345)) ([46d0b23](https://github.com/akash-network/console/commit/46d0b2315f7aed4dabdc31f75dac964f43a4264d))

## [1.33.0](https://github.com/akash-network/console/compare/provider-console/v1.32.0...provider-console/v1.33.0) (2025-12-11)


### Features

* adds api for password authentication via auth0 ([#2333](https://github.com/akash-network/console/issues/2333)) ([f8d2a9a](https://github.com/akash-network/console/commit/f8d2a9a9136c688bc07d503e4042687bb54c3949))

## [1.32.0](https://github.com/akash-network/console/compare/provider-console/v1.31.0...provider-console/v1.32.0) (2025-12-09)


### Features

* account overview, auto reload, and separate payment method page  ([46b0a99](https://github.com/akash-network/console/commit/46b0a99e66be7beab0e1908f687cece6880aa268)), closes [#1779](https://github.com/akash-network/console/issues/1779)

## [1.31.0](https://github.com/akash-network/console/compare/provider-console/v1.30.0...provider-console/v1.31.0) (2025-11-17)


### Features

* upgrade Node.js to 24.11.1 LTS ([#2223](https://github.com/akash-network/console/issues/2223)) ([d9feb09](https://github.com/akash-network/console/commit/d9feb090d45408ec9835216bfc5c6fb3f1329abc))


### Bug Fixes

* correct typos and formatting issues ([#2221](https://github.com/akash-network/console/issues/2221)) ([28e7a98](https://github.com/akash-network/console/commit/28e7a98d2a9f8a8cdefb6b538307c1ec4f34cf55))

## [1.30.0](https://github.com/akash-network/console/compare/provider-console/v1.29.1...provider-console/v1.30.0) (2025-11-07)


### Features

* **onboarding:** welcome step create deployment ([#2170](https://github.com/akash-network/console/issues/2170)) ([47c2a91](https://github.com/akash-network/console/commit/47c2a91aea877d4a06ea7953b20f3fa31151b0dd))

## [1.29.1](https://github.com/akash-network/console/compare/provider-console/v1.29.0...provider-console/v1.29.1) (2025-10-29)


### Bug Fixes

* akashnet twitter handle ([#2125](https://github.com/akash-network/console/issues/2125)) ([10b4d28](https://github.com/akash-network/console/commit/10b4d280eac5173661688805841499314e8e1cc8))

## [1.29.0](https://github.com/akash-network/console/compare/provider-console/v1.28.1...provider-console/v1.29.0) (2025-10-27)


### Features

* **provider:** sdk 53 upgrade and cleanup dead code ([#1989](https://github.com/akash-network/console/issues/1989)) ([f86e600](https://github.com/akash-network/console/commit/f86e6003899c07fff66b8196dec03c0ed74d8342))

## [1.28.1](https://github.com/akash-network/console/compare/provider-console/v1.28.0...provider-console/v1.28.1) (2025-10-27)


### Bug Fixes

* **release:** triggers release  ([cd59471](https://github.com/akash-network/console/commit/cd594718d29ec1f7d1de13071fb2e999b5b8a088))

## [1.28.0](https://github.com/akash-network/console/compare/provider-console/v1.27.1...provider-console/v1.28.0) (2025-10-27)


### Features

* chain sdk next web ([#2050](https://github.com/akash-network/console/issues/2050)) ([1bc10ea](https://github.com/akash-network/console/commit/1bc10ea201360054e53d65a21f845f22d842352b))


### Bug Fixes

* name and right button link to deployment page, not the whole line ([3ea1f04](https://github.com/akash-network/console/commit/3ea1f0433cac42d13ce80d5c8e092519da423963)), closes [#1981](https://github.com/akash-network/console/issues/1981)

## [1.27.1](https://github.com/akash-network/console/compare/provider-console/v1.27.0...provider-console/v1.27.1) (2025-10-21)


### Bug Fixes

* checkbox can optionally have a larger clickable wrapper  ([e3c51dd](https://github.com/akash-network/console/commit/e3c51ddd7e1fa25d5933ad4dd5b8b58d9ac23a34)), closes [#1981](https://github.com/akash-network/console/issues/1981)

## [1.27.0](https://github.com/akash-network/console/compare/provider-console/v1.26.0...provider-console/v1.27.0) (2025-10-17)


### Features

* **network:** adjusts indexer for sdk53 network upgrade ([dfc7d05](https://github.com/akash-network/console/commit/dfc7d05123a52470fb527908c935c1ee12f66da5))

## [1.26.0](https://github.com/akash-network/console/compare/provider-console/v1.25.0...provider-console/v1.26.0) (2025-10-06)


### Features

* **auth:** implements managed wallet API JWT auth  ([06b4e45](https://github.com/akash-network/console/commit/06b4e4540433b3b55fbc31f76d955e05e040a82e))

## [1.25.0](https://github.com/akash-network/console/compare/provider-console/v1.24.0...provider-console/v1.25.0) (2025-10-01)


### Features

* **provider:** extract chain env variable for sandbox env ([#1970](https://github.com/akash-network/console/issues/1970)) ([9050c0b](https://github.com/akash-network/console/commit/9050c0b584eee36e430f2ed572c9cb693f9ce62f))

## [1.24.0](https://github.com/akash-network/console/compare/provider-console/v1.23.1...provider-console/v1.24.0) (2025-09-30)


### Features

* disable some features when blockchain is down ([#1971](https://github.com/akash-network/console/issues/1971)) ([64d5bef](https://github.com/akash-network/console/commit/64d5befefc09479a09d5e1a829c9004ab2d6470e))

## [1.23.1](https://github.com/akash-network/console/compare/provider-console/v1.23.0...provider-console/v1.23.1) (2025-09-15)


### Bug Fixes

* sync email_verified from auth0 on demand  ([436e41a](https://github.com/akash-network/console/commit/436e41a6a1dc2c39552192d2ae648b011ccb44e2))

## [1.23.0](https://github.com/akash-network/console/compare/provider-console/v1.22.0...provider-console/v1.23.0) (2025-08-28)


### Features

* **billing:** implement charges csv export  ([cbb3570](https://github.com/akash-network/console/commit/cbb3570a50876908c01006582a930590cf87f87d))

## [1.22.0](https://github.com/akash-network/console/compare/provider-console/v1.21.1...provider-console/v1.22.0) (2025-08-26)


### Features

* adds api background-jobs server setup ([#1833](https://github.com/akash-network/console/issues/1833)) ([d3e6214](https://github.com/akash-network/console/commit/d3e6214800722fafd872a876ddaff0591a6e6dd8))

## [1.21.1](https://github.com/akash-network/console/compare/provider-console/v1.21.0...provider-console/v1.21.1) (2025-08-25)


### Bug Fixes

* **deployment:** handles invalid manifest errors on POST /v1/leases ([f5da5c4](https://github.com/akash-network/console/commit/f5da5c4b02ef3e2977a8f5855eb5a8b81ac8281b)), closes [#1835](https://github.com/akash-network/console/issues/1835)

## [1.21.0](https://github.com/akash-network/console/compare/provider-console/v1.20.0...provider-console/v1.21.0) (2025-08-18)


### Features

* **auth:** enhance API key management with new hooks and tests ([#1813](https://github.com/akash-network/console/issues/1813)) ([ebfcbbe](https://github.com/akash-network/console/commit/ebfcbbe50812fb683e5e43136bb4147da85e75a9))


### Bug Fixes

* make date range picker scrollable if it overflows container ([ac6f2a8](https://github.com/akash-network/console/commit/ac6f2a87cea5eecfe5696c15af38bec09027087a))

## [1.20.0](https://github.com/akash-network/console/compare/provider-console/v1.19.1...provider-console/v1.20.0) (2025-08-14)


### Features

* enables sentry sourcemaps in deploy-web ([#1800](https://github.com/akash-network/console/issues/1800)) ([f7c83bf](https://github.com/akash-network/console/commit/f7c83bf749199d17e9d9b8cb7c2f7a3413a59887))

## [1.19.1](https://github.com/akash-network/console/compare/provider-console/v1.19.0...provider-console/v1.19.1) (2025-08-07)


### Bug Fixes

* **provider:** added loading for api-key get call ([#1792](https://github.com/akash-network/console/issues/1792)) ([9552aa2](https://github.com/akash-network/console/commit/9552aa2c711c0613b2efd92d4db2aae75abf328f))

## [1.19.0](https://github.com/akash-network/console/compare/provider-console/v1.18.0...provider-console/v1.19.0) (2025-07-31)


### Features

* **billing:** add stripe charges table list to usage ui  ([81e9d42](https://github.com/akash-network/console/commit/81e9d42d254bee6248451aecde8868ccbf018d89))
* **deployment:** implement trial deployment badge ([#1764](https://github.com/akash-network/console/issues/1764)) ([3e2fdae](https://github.com/akash-network/console/commit/3e2fdaee9f03bb95235f1f3171665111004807f8))

## [1.18.0](https://github.com/akash-network/console/compare/provider-console/v1.17.0...provider-console/v1.18.0) (2025-07-27)


### Features

* adds safe node packages installation ([#1726](https://github.com/akash-network/console/issues/1726)) ([37acfee](https://github.com/akash-network/console/commit/37acfee5c1d053cec2316560ad220992d70b7cbf)), closes [#1549](https://github.com/akash-network/console/issues/1549)

## [1.17.0](https://github.com/akash-network/console/compare/provider-console/v1.16.0...provider-console/v1.17.0) (2025-07-21)


### Features

* **provider:** wp: api key page ([#1497](https://github.com/akash-network/console/issues/1497)) ([21c9c9d](https://github.com/akash-network/console/commit/21c9c9d260d665027bb9a19f757fdb474c4f3841))

## [1.16.0](https://github.com/akash-network/console/compare/provider-console/v1.15.3...provider-console/v1.16.0) (2025-07-16)


### Features

* add calendar and date-range-picker ui components ([cc96f0f](https://github.com/akash-network/console/commit/cc96f0f71ea9078f39775623144058785b745e6c))
* **billing:** add usage ui ([77b5d42](https://github.com/akash-network/console/commit/77b5d42aaf4e153a6fe9f6723567520434f3d25b))

## [1.15.3](https://github.com/akash-network/console/compare/provider-console/v1.15.2...provider-console/v1.15.3) (2025-07-06)


### Bug Fixes

* ensure next uses app version as sentry release number ([#1634](https://github.com/akash-network/console/issues/1634)) ([68a86d1](https://github.com/akash-network/console/commit/68a86d1f448af8a4ba1d20c76a97f7026664f40c))

## [1.15.2](https://github.com/akash-network/console/compare/provider-console/v1.15.1...provider-console/v1.15.2) (2025-07-05)


### Bug Fixes

* ignore errors in SQL formatting ([#1630](https://github.com/akash-network/console/issues/1630)) ([ad21ab0](https://github.com/akash-network/console/commit/ad21ab0e8c581db930d6e5987de9492a8d717f6d))

## [1.15.1](https://github.com/akash-network/console/compare/provider-console/v1.15.0...provider-console/v1.15.1) (2025-06-28)


### Bug Fixes

* updates @akashnetwork/akashjs ([#1575](https://github.com/akash-network/console/issues/1575)) ([ae86837](https://github.com/akash-network/console/commit/ae868378ae35db3342ff5d44f9d270644178c507))
* upgrades nodejs to higher version ([#1563](https://github.com/akash-network/console/issues/1563)) ([dac08eb](https://github.com/akash-network/console/commit/dac08ebadcc29164eda2e76417ac85ec210ea1b0))

## [1.15.0](https://github.com/akash-network/console/compare/provider-console/v1.14.0...provider-console/v1.15.0) (2025-06-17)


### Features

* adds possibility to pass multiple env variables into Env variable popup ([#1501](https://github.com/akash-network/console/issues/1501)) ([9f7c89e](https://github.com/akash-network/console/commit/9f7c89e1c4363fe80b5d5ddeeef1bd0e4f0d2faf))

## [1.14.0](https://github.com/akash-network/console/compare/provider-console/v1.13.0...provider-console/v1.14.0) (2025-06-16)


### Features

* adds feature flags support to console-api's notifications proxy ([#1472](https://github.com/akash-network/console/issues/1472)) ([c663c55](https://github.com/akash-network/console/commit/c663c552cb1d03e38fcf13efc2b89086cf7c4585))

## [1.13.0](https://github.com/akash-network/console/compare/provider-console/v1.12.4...provider-console/v1.13.0) (2025-06-11)


### Features

* **billing:** stripe integration ([#1443](https://github.com/akash-network/console/issues/1443)) ([85c046b](https://github.com/akash-network/console/commit/85c046b1f7286b6c5fea41251712b3e89f413163))

## [1.12.4](https://github.com/akash-network/console/compare/provider-console/v1.12.3...provider-console/v1.12.4) (2025-06-11)


### Code Refactoring

* move /v1/leases-duration/{owner} to modules ([#1440](https://github.com/akash-network/console/issues/1440)) ([605bb55](https://github.com/akash-network/console/commit/605bb55060546974c4c32970c6572d8b315533bd)), closes [#1280](https://github.com/akash-network/console/issues/1280)

## [1.12.3](https://github.com/akash-network/console/compare/provider-console/v1.12.2...provider-console/v1.12.3) (2025-06-09)


### Bug Fixes

* fixes e2e tests and adds closeDeployments script ([#1446](https://github.com/akash-network/console/issues/1446)) ([92d7389](https://github.com/akash-network/console/commit/92d73895ff9f8422929365d3e4dfda10f6982796))

## [1.12.2](https://github.com/akash-network/console/compare/provider-console/v1.12.1...provider-console/v1.12.2) (2025-05-29)


### Bug Fixes

* docker node permissions ([#1410](https://github.com/akash-network/console/issues/1410)) ([073b43a](https://github.com/akash-network/console/commit/073b43aa1f89192bd9f96193f7d721d34840a441))

## [1.12.1](https://github.com/akash-network/console/compare/provider-console/v1.12.0...provider-console/v1.12.1) (2025-05-28)


### Bug Fixes

* **provider:** changed internal to v1 for provider-dashboard api call ([#1398](https://github.com/akash-network/console/issues/1398)) ([d9ee9e6](https://github.com/akash-network/console/commit/d9ee9e6cfd8c292ae24a375022689bb3a54abfab))

## [1.12.0](https://github.com/akash-network/console/compare/provider-console/v1.11.3...provider-console/v1.12.0) (2025-05-28)


### Features

* **contact-point:** implements list ui ([b9d8c24](https://github.com/akash-network/console/commit/b9d8c24eb826897a4462949503b30ef6134a3bc7))

## [1.11.3](https://github.com/akash-network/console/compare/provider-console/v1.11.2...provider-console/v1.11.3) (2025-05-28)


### Bug Fixes

* update auth0 audience and issuer ([#1382](https://github.com/akash-network/console/issues/1382)) ([6e66727](https://github.com/akash-network/console/commit/6e667277a8c4f9ed787bcdc2094377fe4ae625b1))

## [1.11.2](https://github.com/akash-network/console/compare/provider-console/v1.11.1...provider-console/v1.11.2) (2025-05-27)


### Bug Fixes

* **release:** builds notifications image w/o nginx ([d68bf9a](https://github.com/akash-network/console/commit/d68bf9a94c118aa65656e15924163ba9d54a4e2b))

## [1.11.1](https://github.com/akash-network/console/compare/provider-console/v1.11.0...provider-console/v1.11.1) (2025-05-26)


### Bug Fixes

* **release:** adds notifications to docker setup  ([6951faf](https://github.com/akash-network/console/commit/6951faf46850643515757c7c16c328bbf622fa76))

## [1.11.0](https://github.com/akash-network/console/compare/provider-console/v1.10.0...provider-console/v1.11.0) (2025-05-21)


### Features

* **contact-point:** implements unleash feature flagging and contact creation ui ([6ad02ce](https://github.com/akash-network/console/commit/6ad02ce382dc76b9d317aa3934416da3605ad53b))
* **provider:** uninstall provider using console ([#1341](https://github.com/akash-network/console/issues/1341)) ([cc37e35](https://github.com/akash-network/console/commit/cc37e355879370d89c7a944fb097bd27685a457b))
* **styling:** improve sidebar ([#1344](https://github.com/akash-network/console/issues/1344)) ([77e88dd](https://github.com/akash-network/console/commit/77e88dd9a61b0d38ded8e108a58a6de093a29de7))

## [1.10.0](https://github.com/akash-network/console/compare/provider-console/v1.9.7...provider-console/v1.10.0) (2025-05-16)


### Features

* jwt provider schema ([#1312](https://github.com/akash-network/console/issues/1312)) ([379a2d3](https://github.com/akash-network/console/commit/379a2d3ceb519e8b49c75373b8aa7a4a735bf599))

## [1.9.7](https://github.com/akash-network/console/compare/provider-console/v1.9.6...provider-console/v1.9.7) (2025-05-12)


### Bug Fixes

* **provider:** online status changed and control-machine changed ([#1310](https://github.com/akash-network/console/issues/1310)) ([0566fb2](https://github.com/akash-network/console/commit/0566fb24916c8c60144661fd8ef6f47bd180ef05))

## [1.9.6](https://github.com/akash-network/console/compare/provider-console/v1.9.5...provider-console/v1.9.6) (2025-05-10)


### Code Refactoring

* uses logger and http sdk from local pkgs for notification service ([fe3539b](https://github.com/akash-network/console/commit/fe3539b5995aca4f88fe281da5ac282779ee3f8e))

## [1.9.5](https://github.com/akash-network/console/compare/provider-console/v1.9.4...provider-console/v1.9.5) (2025-05-01)


### Code Refactoring

* **authorization:** use react-table for deployment grants  ([cfd28ab](https://github.com/akash-network/console/commit/cfd28aba79a349f17293a669f8104b8565db8e8d)), closes [#595](https://github.com/akash-network/console/issues/595)

## [1.9.4](https://github.com/akash-network/console/compare/provider-console/v1.9.3...provider-console/v1.9.4) (2025-04-17)


### Code Refactoring

* removes sentry from console-api ([#1220](https://github.com/akash-network/console/issues/1220)) ([8339158](https://github.com/akash-network/console/commit/8339158321771e716cddd7de4242d7de370697d0))

## [1.9.3](https://github.com/akash-network/console/compare/provider-console/v1.9.2...provider-console/v1.9.3) (2025-04-15)


### Bug Fixes

* **provider:** styling issue fixed in dark mode ([#1216](https://github.com/akash-network/console/issues/1216)) ([175d513](https://github.com/akash-network/console/commit/175d5136fc073c8262b8de20e462f73abbc7d6c2))

## [1.9.2](https://github.com/akash-network/console/compare/provider-console/v1.9.1...provider-console/v1.9.2) (2025-04-15)


### Bug Fixes

* disables nodejs auto family selection ([#1212](https://github.com/akash-network/console/issues/1212)) ([c6be104](https://github.com/akash-network/console/commit/c6be104cf583a07d20fb9f92661ffa29e23b492a))

## [1.9.1](https://github.com/akash-network/console/compare/provider-console/v1.9.0...provider-console/v1.9.1) (2025-04-11)


### Bug Fixes

* **provider:** fixed ordering on control node and worker node and cal… ([#1199](https://github.com/akash-network/console/issues/1199)) ([50ba064](https://github.com/akash-network/console/commit/50ba064593421bcfacbab4ddb520a5d8fa7b2f7f))

## [1.9.0](https://github.com/akash-network/console/compare/provider-console/v1.8.1...provider-console/v1.9.0) (2025-04-10)


### Features

* **provider:** node management with changes to create cluster ([#1167](https://github.com/akash-network/console/issues/1167)) ([ef79ff6](https://github.com/akash-network/console/commit/ef79ff6c500350bf014183c7101d3f5cf6190d3a))

## [1.8.1](https://github.com/akash-network/console/compare/provider-console/v1.8.0...provider-console/v1.8.1) (2025-04-08)


### Bug Fixes

* **provider:** fix control machine error and added cta button ([#1109](https://github.com/akash-network/console/issues/1109)) ([4a78637](https://github.com/akash-network/console/commit/4a786372fb01431566782760762978947790a4f5))

## [1.8.0](https://github.com/akash-network/console/compare/provider-console/v1.7.0...provider-console/v1.8.0) (2025-04-02)


### Features

* **provider:** added port and DNS checker screen ([#1112](https://github.com/akash-network/console/issues/1112)) ([8e97e08](https://github.com/akash-network/console/commit/8e97e08863aebaafdcd2f9e525f76ce3d144947b))
* **provider:** test and audit instruction for non-audited providers ([#1111](https://github.com/akash-network/console/issues/1111)) ([5ac9fe4](https://github.com/akash-network/console/commit/5ac9fe48211683a71953d76b4768be26620f163e))

## [1.7.0](https://github.com/akash-network/console/compare/provider-console/v1.6.0...provider-console/v1.7.0) (2025-03-31)


### Features

* **deployment:** managed wallet api update deployment ([#1093](https://github.com/akash-network/console/issues/1093)) ([6998834](https://github.com/akash-network/console/commit/699883436cc1763a20f65cce17390403107b179a))
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/akash-network/console/issues/1095)) ([8533b35](https://github.com/akash-network/console/commit/8533b355762016829c4435fd67c7885df79b251e))


### Code Refactoring

* moves trial authorization spending out of db transaction ([#1129](https://github.com/akash-network/console/issues/1129)) ([8c8e372](https://github.com/akash-network/console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))

## [1.6.0](https://github.com/akash-network/console/compare/provider-console/v1.5.2...provider-console/v1.6.0) (2025-03-26)


### Features

* **provider:** added upgrade button for provider ([#1110](https://github.com/akash-network/console/issues/1110)) ([c2d7512](https://github.com/akash-network/console/commit/c2d751233e4b4779e584761392bf0175e8c8ee1c))


### Bug Fixes

* update nextjs version ([#1105](https://github.com/akash-network/console/issues/1105)) ([5d24cd8](https://github.com/akash-network/console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))

## [1.5.2](https://github.com/akash-network/console/compare/provider-console/v1.5.1...provider-console/v1.5.2) (2025-03-21)


### Bug Fixes

* **provider:** changed upgrade status api to fix upgrade checks ([#1082](https://github.com/akash-network/console/issues/1082)) ([0978a09](https://github.com/akash-network/console/commit/0978a09805eed45af4dca7757d3d917883fe7874))

## [1.5.1](https://github.com/akash-network/console/compare/provider-console/v1.5.0...provider-console/v1.5.1) (2025-03-20)


### Code Refactoring

* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/akash-network/console/issues/1074)) ([509fcd3](https://github.com/akash-network/console/commit/509fcd39831311950afdfb51c189ef46b02c855f))

## [1.5.0](https://github.com/akash-network/console/compare/provider-console/v1.4.2...provider-console/v1.5.0) (2025-03-20)


### Features

* introduce multi-line commands ([e58349b](https://github.com/akash-network/console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/akash-network/console/issues/175)
* **notifications:** adds basic alerts service ([5d4d6fc](https://github.com/akash-network/console/commit/5d4d6fcf23ceb2b317453a001d4043855df5c5d1))
* **wallet:** improve coupon codes ux ([#1028](https://github.com/akash-network/console/issues/1028)) ([b4a81c7](https://github.com/akash-network/console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))


### Bug Fixes

* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/akash-network/console/issues/1070)) ([e1053c4](https://github.com/akash-network/console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* updates dockerfile for node apps ([#1068](https://github.com/akash-network/console/issues/1068)) ([54194a0](https://github.com/akash-network/console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))


### Code Refactoring

* update react-query in provider-console ([#1002](https://github.com/akash-network/console/issues/1002)) ([cd5b64a](https://github.com/akash-network/console/commit/cd5b64adeac4d8774f44ef90b4802e69fea69cfe))

## [1.4.2](https://github.com/akash-network/console/compare/provider-console/v1.4.1...provider-console/v1.4.2) (2025-03-14)


### Bug Fixes

* **provider:** added chart upgrade button for helm chart version update ([#1035](https://github.com/akash-network/console/issues/1035)) ([a7e3931](https://github.com/akash-network/console/commit/a7e39311e32563efd64a9b6b1e8657b789139ff8))

## [1.4.1](https://github.com/akash-network/console/compare/provider-console/v1.4.0...provider-console/v1.4.1) (2025-03-13)


### Bug Fixes

* **provider:** added redirect once we have a success on network upgrade ([#1016](https://github.com/akash-network/console/issues/1016)) ([09c276a](https://github.com/akash-network/console/commit/09c276a27f841dd6f43a1c4bf5dcb1b31a448b63))

## [1.4.0](https://github.com/akash-network/console/compare/provider-console/v1.3.1...provider-console/v1.4.0) (2025-03-12)


### Features

* **provider:** added node upgrade button in settings ([#1007](https://github.com/akash-network/console/issues/1007)) ([98fa7fb](https://github.com/akash-network/console/commit/98fa7fb87a2f36ff4cc7846c01f99f5be5ed04e3))

## [1.3.1](https://github.com/akash-network/console/compare/provider-console/v1.3.0...provider-console/v1.3.1) (2025-03-11)


### Bug Fixes

* **provider:** updated provider pricing decimals before sending ([#998](https://github.com/akash-network/console/issues/998)) ([22d25f7](https://github.com/akash-network/console/commit/22d25f7f660a7d256a13012ad582772892f4219e))

## [1.3.0](https://github.com/akash-network/console/compare/provider-console/v1.2.2...provider-console/v1.3.0) (2025-03-11)


### Features

* **provider:** added disconnect button for control machines ([#996](https://github.com/akash-network/console/issues/996)) ([dd1bc74](https://github.com/akash-network/console/commit/dd1bc74832ae889298ea0cfa6f7234cb935ae33c))

## [1.2.2](https://github.com/akash-network/console/compare/provider-console/v1.2.1...provider-console/v1.2.2) (2025-03-10)


### Bug Fixes

* **provider:** fixed provider pricing page where issue when no gpus ([#982](https://github.com/akash-network/console/issues/982)) ([5464ec0](https://github.com/akash-network/console/commit/5464ec058a5ea91c6d19e23cf35ff3b2d68943f3))

## [1.2.1](https://github.com/akash-network/console/compare/provider-console/v1.2.0...provider-console/v1.2.1) (2025-03-05)


### Bug Fixes

* **provider:** fixed loading issue on some pages, fixed some guides ([#939](https://github.com/akash-network/console/issues/939)) ([5054b19](https://github.com/akash-network/console/commit/5054b192e7a656bc82fa3b22862bea090f13e02c))

## [1.2.0](https://github.com/akash-network/console/compare/provider-console/v1.1.2...provider-console/v1.2.0) (2025-03-04)


### Features

* **provider:** added version to sidebar ([#897](https://github.com/akash-network/console/issues/897)) ([5a3bef5](https://github.com/akash-network/console/commit/5a3bef5803bcc0c452fa888e9aaee99e32f54e45))
* **provider:** converted monthly pricing to hourly pricing ([#896](https://github.com/akash-network/console/issues/896)) ([c6e21c7](https://github.com/akash-network/console/commit/c6e21c7cc3a3395c31b95a298fa73c2748eeec0e))

## [1.1.2](https://github.com/akash-network/console/compare/provider-console/v1.1.1...provider-console/v1.1.2) (2025-02-20)


### Bug Fixes

* **provider:** fixed non provider login issue ([#879](https://github.com/akash-network/console/issues/879)) ([1d571a5](https://github.com/akash-network/console/commit/1d571a5725e18b791c77ce50d6066755901e2f5b))

## [1.1.1](https://github.com/akash-network/console/compare/provider-console/v1.1.0...provider-console/v1.1.1) (2025-02-20)


### Bug Fixes

* **provider:** added akash install step in manual wallet import part ([#875](https://github.com/akash-network/console/issues/875)) ([d8a21bd](https://github.com/akash-network/console/commit/d8a21bdb1f63cdb4ccc6e1de151fec9bde080476))

## [1.1.0](https://github.com/akash-network/console/compare/provider-console/v1.0.7...provider-console/v1.1.0) (2025-02-20)


### Features

* **provider:** added auto attributes, fixed issue on activity-logs ([#872](https://github.com/akash-network/console/issues/872)) ([309922b](https://github.com/akash-network/console/commit/309922ba65013363c024ff7ace1f00d2bfe64004))

## [1.0.7](https://github.com/akash-network/console/compare/provider-console/v1.0.6...provider-console/v1.0.7) (2025-02-19)


### Bug Fixes

* **provider:** added missing prop passphrase ([#867](https://github.com/akash-network/console/issues/867)) ([8a38776](https://github.com/akash-network/console/commit/8a3877685bd046d828b53060996ba963e765c51b))

## [1.0.6](https://github.com/akash-network/console/compare/provider-console/v1.0.5...provider-console/v1.0.6) (2025-02-19)


### Bug Fixes

* **provider:** added missing passphrase field in final request ([#864](https://github.com/akash-network/console/issues/864)) ([98dfc89](https://github.com/akash-network/console/commit/98dfc892d93c4db40e8bae7c18d8743ad5c68d69))

## [1.0.5](https://github.com/akash-network/console/compare/provider-console/v1.0.4...provider-console/v1.0.5) (2025-02-14)


### Bug Fixes

* **provider:** fixed token issue and actionDetails issue ([#852](https://github.com/akash-network/console/issues/852)) ([48d58f4](https://github.com/akash-network/console/commit/48d58f4b3eecbe469f96bc4df0d8f9d5bbde80ea))

## [1.0.4](https://github.com/akash-network/console/compare/provider-console/v1.0.3...provider-console/v1.0.4) (2025-02-14)


### Bug Fixes

* **provider:** fixed onchain error and blank client error on retry provider process ([#848](https://github.com/akash-network/console/issues/848)) ([c354e77](https://github.com/akash-network/console/commit/c354e77f065d411441424787d30188e800053737))

## [1.0.3](https://github.com/akash-network/console/compare/provider-console/v1.0.2...provider-console/v1.0.3) (2025-02-11)

## [1.0.2] (https://github.com/akash-network/console/compare/provider-console/v1.0.1...provider-console/v1.0.2) (2025-02-05)

### Bug Fixes

* deployment: fix(provider): better error handling on non provider calls ([e27e54c](https://github.com/akash-network/console/commit/e27e54c95022fd1eda926ac407a82fb7a279c639)), closes [#811](https://github.com/akash-network/console/issues/811)

## [1.0.1] (https://github.com/akash-network/console/compare/provider-console/v1.0.0...provider-console/v1.0.1) (2025-02-05)

### Code Refactoring

* releasing provider console 1.0.1
