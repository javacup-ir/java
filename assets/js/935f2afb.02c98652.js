"use strict";(self.webpackChunkjava_features=self.webpackChunkjava_features||[]).push([[53],{1109:a=>{a.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u0645\u0639\u0631\u0641\u06cc \u067e\u0631\u0648\u0698\u0647","href":"/docs/intro","docId":"intro"},{"type":"category","label":"\u0648\u06cc\u0698\u06af\u06cc\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u0627\u0628\u0632\u0627\u0631 Jshell","href":"/docs/java-features/jshell","docId":"java-features/jshell"},{"type":"link","label":"\u0645\u062a\u062f\u0647\u0627\u06cc \u0633\u0627\u0632\u0646\u062f\u0647 Collection\u0647\u0627","href":"/docs/java-features/collections-factory-methods","docId":"java-features/collections-factory-methods"},{"type":"link","label":"\u062a\u0634\u062e\u06cc\u0635 \u0646\u0648\u0639 \u0645\u062a\u063a\u06cc\u06cc\u0631\u0647\u0627\u06cc \u0645\u062d\u0644\u06cc (Local-Variable Type Inference)","href":"/docs/java-features/local-variable-type-Inference","docId":"java-features/local-variable-type-Inference"},{"type":"link","label":"\u0639\u0628\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u0633\u0648\u0626\u06cc\u0686 (Switch Expressions)","href":"/docs/java-features/switch-expressions","docId":"java-features/switch-expressions"},{"type":"link","label":"\u0631\u0634\u062a\u0647 \u0686\u0646\u062f\u062e\u0637\u06cc (Text Block)","href":"/docs/java-features/text-blocks","docId":"java-features/text-blocks"},{"type":"link","label":"\u0631\u06a9\u0648\u0631\u062f\u0647\u0627 (Records)","href":"/docs/java-features/records","docId":"java-features/records"}],"href":"/docs/category/\u0648\u06cc\u0698\u06af\u06cc\u0647\u0627\u06cc-\u062c\u062f\u06cc\u062f"},{"type":"category","label":"\u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u0632\u0628\u0627\u0646 \u062c\u0627\u0648\u0627","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u06f9","href":"/docs/java-versions/java-9","docId":"java-versions/java-9"},{"type":"link","label":"\u06f1\u06f0","href":"/docs/java-versions/java-10","docId":"java-versions/java-10"},{"type":"link","label":"\u06f1\u06f1","href":"/docs/java-versions/java-11","docId":"java-versions/java-11"},{"type":"link","label":"\u06f1\u06f2","href":"/docs/java-versions/java-12","docId":"java-versions/java-12"},{"type":"link","label":"\u06f1\u06f3","href":"/docs/java-versions/java-13","docId":"java-versions/java-13"},{"type":"link","label":"\u06f1\u06f4","href":"/docs/java-versions/java-14","docId":"java-versions/java-14"},{"type":"link","label":"\u06f1\u06f5","href":"/docs/java-versions/java-15","docId":"java-versions/java-15"},{"type":"link","label":"\u06f1\u06f6","href":"/docs/java-versions/java-16","docId":"java-versions/java-16"}],"href":"/docs/category/\u0646\u0633\u062e\u0647\u0647\u0627\u06cc-\u0632\u0628\u0627\u0646-\u062c\u0627\u0648\u0627"}]},"docs":{"intro":{"id":"intro","title":"\u0645\u0639\u0631\u0641\u06cc \u067e\u0631\u0648\u0698\u0647","description":"\u062a\u0627 \u062c\u0627\u0648\u0627 \u0646\u0633\u062e\u0647 \u06f8\u060c \u0627\u0646\u062a\u0634\u0627\u0631 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u062c\u0627\u0648\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0627\u0645\u0646\u0638\u0645 \u0648 \u0628\u0627 \u0641\u0648\u0627\u0635\u0644 \u0632\u0645\u0627\u0646\u06cc \u0637\u0648\u0644\u0627\u0646\u06cc\u200c\u0645\u062f\u062a \u0628\u0648\u062f \u06a9\u0647 \u0628\u0627\u0639\u062b \u0645\u06cc\u200c\u0634\u062f \u062a\u063a\u06cc\u06cc\u0631\u060c \u062a\u06a9\u0627\u0645\u0644 \u0648 \u067e\u06cc\u0634\u0631\u0641\u062a \u0627\u06cc\u0646 \u0632\u0628\u0627\u0646 \u0628\u0627 \u06a9\u0646\u062f\u06cc \u0645\u0648\u0627\u062c\u0647 \u0628\u0627\u0634\u062f. \u0648\u0644\u06cc \u067e\u0633 \u0627\u0632 \u0627\u0646\u062a\u0634\u0627\u0631 \u062c\u0627\u0648\u0627 \u06f8 \u0627\u06cc\u0646 \u0631\u0648\u06cc\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f \u0648 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0631\u06cc\u0632\u06cc \u0634\u062f \u06a9\u0647 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u062c\u0627\u0648\u0627 \u0647\u0631 \u06f6 \u0645\u0627\u0647 \u06cc\u06a9\u200c\u0628\u0627\u0631 \u0645\u0646\u062a\u0634\u0631 \u0634\u0648\u0646\u062f \u0648 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0646\u062c\u0631 \u0628\u0647 \u0633\u0631\u0639\u062a \u06af\u0631\u0641\u062a\u0646 \u067e\u06cc\u0634\u0631\u0641\u062a \u0648 \u062a\u06a9\u0627\u0645\u0644 \u0632\u0628\u0627\u0646 \u062c\u0627\u0648\u0627 \u06af\u0631\u062f\u06cc\u062f. \u0627\u0645\u0627 \u0627\u06a9\u0646\u0648\u0646 \u06a9\u0647 \u0686\u0646\u062f\u06cc\u0646 \u0633\u0627\u0644 \u0627\u0632 \u0627\u06cc\u0646 \u062a\u0635\u0645\u06cc\u0645 \u0645\u06cc\u200c\u06af\u0630\u0631\u062f \u0648 \u0647\u0631 \u06f6 \u0645\u0627\u0647 \u06cc\u06a9\u200c\u0628\u0627\u0631 \u0646\u0633\u062e\u0647\u200c \u062c\u062f\u06cc\u062f\u06cc \u0627\u0632 \u0632\u0628\u0627\u0646 \u062c\u0627\u0648\u0627 \u0628\u0627 \u0648\u06cc\u0698\u06af\u06cc\u200c\u0647\u0627 \u0648 \u0628\u0647\u0628\u0648\u062f\u0647\u0627\u06cc \u0641\u0631\u0627\u0648\u0627\u0646 \u0645\u0646\u062a\u0634\u0631 \u0634\u062f\u0647 \u0627\u0633\u062a\u060c \u0628\u0647 \u0646\u0638\u0631 \u0645\u06cc\u200c\u0631\u0633\u062f \u0647\u0646\u0648\u0632 \u062c\u0627\u0645\u0639\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633\u0627\u0646 \u062c\u0627\u0648\u0627 \u062f\u0631 \u0627\u06cc\u0631\u0627\u0646 \u0628\u0627 \u0627\u06cc\u0646 \u0648\u06cc\u0698\u06af\u06cc\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0628\u0647 \u062e\u0648\u0628\u06cc \u0622\u0634\u0646\u0627 \u0646\u0628\u0648\u062f\u0647 \u0648 \u0647\u0645\u06cc\u0646 \u0627\u0645\u0631 \u0645\u0627\u0646\u0639 \u0645\u0647\u0627\u062c\u0631\u062a \u0628\u0647 \u0646\u0633\u062e\u0647\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f\u062a\u0631 \u062c\u0627\u0648\u0627 \u0634\u062f\u0647 \u0627\u0633\u062a. \u0627\u0632 \u0627\u06cc\u0646 \u0631\u0648\u060c \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u062a\u0644\u0627\u0634 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u0628\u0647 \u0645\u0631\u0648\u0631 \u0648 \u0628\u0627 \u0645\u0634\u0627\u0631\u06a9\u062a \u062c\u0627\u0645\u0639\u0647 \u062c\u0627\u0648\u0627\u06a9\u0627\u067e \u0628\u0647 \u0645\u0631\u0648\u0631 \u0627\u06cc\u0646 \u0648\u064a\u0632\u06af\u06cc\u200c\u0647\u0627 \u067e\u0631\u062f\u0627\u062e\u062a\u0647 \u0648 \u0628 \u0635\u0648\u0631\u062a \u062c\u062f\u0627\u06af\u0627\u0646\u0647 \u0647\u0631 \u06cc\u06a9 \u0631\u0627 \u0645\u0639\u0631\u0641\u06cc \u06a9\u0646\u062f.","sidebar":"tutorialSidebar"},"java-features/collections-factory-methods":{"id":"java-features/collections-factory-methods","title":"\u0645\u062a\u062f\u0647\u0627\u06cc \u0633\u0627\u0632\u0646\u062f\u0647 Collection\u0647\u0627","description":"","sidebar":"tutorialSidebar"},"java-features/jshell":{"id":"java-features/jshell","title":"\u0627\u0628\u0632\u0627\u0631 Jshell","description":"","sidebar":"tutorialSidebar"},"java-features/local-variable-type-Inference":{"id":"java-features/local-variable-type-Inference","title":"\u062a\u0634\u062e\u06cc\u0635 \u0646\u0648\u0639 \u0645\u062a\u063a\u06cc\u06cc\u0631\u0647\u0627\u06cc \u0645\u062d\u0644\u06cc (Local-Variable Type Inference)","description":"","sidebar":"tutorialSidebar"},"java-features/records":{"id":"java-features/records","title":"\u0631\u06a9\u0648\u0631\u062f\u0647\u0627 (Records)","description":"","sidebar":"tutorialSidebar"},"java-features/switch-expressions":{"id":"java-features/switch-expressions","title":"\u0639\u0628\u0627\u0631\u062a\u200c\u0647\u0627\u06cc \u0633\u0648\u0626\u06cc\u0686 (Switch Expressions)","description":"","sidebar":"tutorialSidebar"},"java-features/text-blocks":{"id":"java-features/text-blocks","title":"\u0631\u0634\u062a\u0647 \u0686\u0646\u062f\u062e\u0637\u06cc (Text Block)","description":"","sidebar":"tutorialSidebar"},"java-versions/java-10":{"id":"java-versions/java-10","title":"\u06f1\u06f0","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-11":{"id":"java-versions/java-11","title":"\u06f1\u06f1","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-12":{"id":"java-versions/java-12","title":"\u06f1\u06f2","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-13":{"id":"java-versions/java-13","title":"\u06f1\u06f3","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-14":{"id":"java-versions/java-14","title":"\u06f1\u06f4","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-15":{"id":"java-versions/java-15","title":"\u06f1\u06f5","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-16":{"id":"java-versions/java-16","title":"\u06f1\u06f6","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"},"java-versions/java-9":{"id":"java-versions/java-9","title":"\u06f9","description":"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u062f\u0631 \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:","sidebar":"tutorialSidebar"}}}')}}]);