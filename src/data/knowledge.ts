export const knowledgeBase = [
  {
    "id": "password_reset",
    "category": "account_access",
    "title": "Password Reset Process",
    "keywords": ["password", "reset", "forgot", "forgotten", "can't login", "cannot login", "locked out", "recover password", "change password", "lost password"],
    "content": "Users can reset their password by clicking 'Forgot Password' on the login page. A reset link will be sent to the registered email address and is valid for 15 minutes. If you don't receive the email, check your spam folder or contact support.",
    "related": ["account_lock", "email_change"],
    "examples": [
      "How do I reset my password?",
      "I forgot my password",
      "Can't remember my login details"
    ]
  },
  {
    "id": "account_lock",
    "category": "account_access",
    "title": "Locked Account Recovery",
    "keywords": ["account", "locked", "login", "failed attempts", "too many tries", "blocked", "suspended", "can't access"],
    "content": "If an account is locked after multiple failed login attempts, users must wait 30 minutes or contact support to unlock it immediately. Accounts are automatically locked after 5 consecutive failed login attempts for security purposes.",
    "related": ["password_reset", "two_factor_auth"],
    "examples": [
      "My account is locked",
      "I can't login after trying multiple times",
      "Account blocked due to failed attempts"
    ]
  },
  {
    "id": "email_change",
    "category": "account_management",
    "title": "Email Address Update",
    "keywords": ["email", "change", "update", "modify", "switch email", "new email", "email address"],
    "content": "Users can change their email address from the Profile Settings page after verifying the new email. You'll receive a verification link at your new email address. The change takes effect once you click the verification link. Your old email will receive a notification of the change.",
    "related": ["password_reset", "profile_settings"],
    "examples": [
      "How do I change my email?",
      "Update email address",
      "Switch to a different email"
    ]
  },
  {
    "id": "two_factor_auth",
    "category": "account_security",
    "title": "Two-Factor Authentication Setup",
    "keywords": ["2fa", "two factor", "authentication", "security", "verify", "verification code", "authenticator", "security code"],
    "content": "Enable two-factor authentication in Security Settings. You can use an authenticator app (recommended), SMS, or email. Once enabled, you'll need to enter a verification code along with your password when logging in. Backup codes are provided during setup in case you lose access to your authentication method.",
    "related": ["account_lock", "password_reset"],
    "examples": [
      "How do I enable 2FA?",
      "Set up two-factor authentication",
      "Add extra security to my account"
    ]
  },
  {
    "id": "profile_settings",
    "category": "account_management",
    "title": "Profile Settings Management",
    "keywords": ["profile", "settings", "preferences", "update profile", "personal information", "account details", "edit profile"],
    "content": "Access your profile settings by clicking your avatar in the top-right corner and selecting 'Profile Settings'. Here you can update your name, email, phone number, password, notification preferences, and privacy settings. Changes are saved automatically.",
    "related": ["email_change", "notification_preferences"],
    "examples": [
      "Where are my profile settings?",
      "How do I update my information?",
      "Change my account details"
    ]
  },
  {
    "id": "notification_preferences",
    "category": "account_management",
    "title": "Notification Preferences",
    "keywords": ["notifications", "emails", "alerts", "unsubscribe", "stop emails", "preferences", "disable notifications", "email settings"],
    "content": "Manage your notification preferences in Settings > Notifications. You can control email notifications, push notifications, and SMS alerts separately. Options include order updates, promotional emails, security alerts, and system announcements. Security alerts cannot be disabled for account safety.",
    "related": ["profile_settings"],
    "examples": [
      "How do I stop receiving emails?",
      "Turn off notifications",
      "Manage my email preferences"
    ]
  },
  {
    "id": "account_deletion",
    "category": "account_management",
    "title": "Account Deletion Process",
    "keywords": ["delete account", "close account", "remove account", "deactivate", "cancel account", "account removal"],
    "content": "To delete your account, go to Settings > Account > Delete Account. You'll need to confirm your password and reason for deletion. Account deletion is permanent and cannot be undone. All data will be removed within 30 days. You can cancel the deletion within 14 days by logging back in.",
    "related": ["data_privacy"],
    "examples": [
      "How do I delete my account?",
      "Close my account permanently",
      "Remove all my data"
    ]
  },
  {
    "id": "payment_methods",
    "category": "billing",
    "title": "Payment Methods",
    "keywords": ["payment", "credit card", "debit card", "paypal", "payment method", "add card", "update card", "billing"],
    "content": "We accept credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. Add or update payment methods in Settings > Billing > Payment Methods. Your card information is securely encrypted and stored. You can set a default payment method for automatic billing.",
    "related": ["subscription_billing", "failed_payment"],
    "examples": [
      "What payment methods do you accept?",
      "How do I add a credit card?",
      "Update my payment information"
    ]
  },
  {
    "id": "subscription_billing",
    "category": "billing",
    "title": "Subscription Billing",
    "keywords": ["subscription", "billing", "charge", "invoice", "billing cycle", "when charged", "payment date", "monthly fee"],
    "content": "Subscriptions are billed monthly on the date you initially subscribed. You can view your billing history and upcoming charges in Settings > Billing. Invoices are sent via email after each payment. You can download PDF invoices from your billing history at any time.",
    "related": ["payment_methods", "subscription_cancel"],
    "examples": [
      "When will I be charged?",
      "View my billing history",
      "Download invoice"
    ]
  },
  {
    "id": "subscription_cancel",
    "category": "billing",
    "title": "Subscription Cancellation",
    "keywords": ["cancel subscription", "stop subscription", "end subscription", "cancel plan", "unsubscribe", "downgrade"],
    "content": "Cancel your subscription anytime in Settings > Billing > Cancel Subscription. You'll retain access until the end of your current billing period. No refunds are provided for partial months. You can reactivate your subscription at any time without losing your data.",
    "related": ["subscription_billing", "refund_policy"],
    "examples": [
      "How do I cancel my subscription?",
      "Stop my monthly payments",
      "End my subscription"
    ]
  },
  {
    "id": "refund_policy",
    "category": "billing",
    "title": "Refund Policy",
    "keywords": ["refund", "money back", "return", "cancel order", "get refund", "refund request", "reimbursement"],
    "content": "Full refunds are available within 30 days of purchase for annual subscriptions. Monthly subscriptions are not eligible for refunds but can be canceled anytime. To request a refund, contact support@company.com with your order number. Refunds are processed within 5-7 business days.",
    "related": ["subscription_cancel", "payment_methods"],
    "examples": [
      "Can I get a refund?",
      "Request money back",
      "Return my purchase"
    ]
  },
  {
    "id": "failed_payment",
    "category": "billing",
    "title": "Failed Payment Resolution",
    "keywords": ["payment failed", "declined", "payment error", "card declined", "payment not working", "billing issue"],
    "content": "If a payment fails, we'll automatically retry within 24 hours. Check that your card has sufficient funds, hasn't expired, and billing address matches. Update your payment method in Settings > Billing. If the issue persists after 3 attempts, your account may be downgraded. Contact your bank or our support team for assistance.",
    "related": ["payment_methods", "subscription_billing"],
    "examples": [
      "My payment failed",
      "Card was declined",
      "Payment not going through"
    ]
  },
  {
    "id": "shipping_times",
    "category": "shipping",
    "title": "Shipping Timeframes",
    "keywords": ["shipping", "delivery", "how long", "shipping time", "when arrive", "delivery time", "receive order"],
    "content": "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International shipping takes 10-15 business days. Orders are processed within 24 hours on business days. You'll receive a tracking number via email once your order ships.",
    "related": ["order_tracking", "shipping_costs"],
    "examples": [
      "How long does shipping take?",
      "When will my order arrive?",
      "Delivery timeframe"
    ]
  },
  {
    "id": "order_tracking",
    "category": "shipping",
    "title": "Order Tracking",
    "keywords": ["track order", "tracking", "tracking number", "where is my order", "order status", "package location"],
    "content": "Track your order using the tracking number sent to your email. You can also view order status in your account under Orders > Order History. Tracking information updates every 24 hours. If tracking hasn't updated in 3 days, contact support with your order number.",
    "related": ["shipping_times", "order_issues"],
    "examples": [
      "How do I track my order?",
      "Where is my package?",
      "Check order status"
    ]
  },
  {
    "id": "shipping_costs",
    "category": "shipping",
    "title": "Shipping Costs",
    "keywords": ["shipping cost", "delivery fee", "shipping price", "free shipping", "shipping charge", "how much shipping"],
    "content": "Standard shipping costs $5.99. Express shipping costs $15.99. Free shipping on orders over $50. International shipping varies by country ($20-$40). Shipping costs are calculated at checkout based on your location and selected shipping method.",
    "related": ["shipping_times"],
    "examples": [
      "How much is shipping?",
      "Shipping costs",
      "Do you offer free shipping?"
    ]
  },
  {
    "id": "order_issues",
    "category": "shipping",
    "title": "Order Issues and Problems",
    "keywords": ["wrong item", "damaged", "missing item", "order problem", "incorrect order", "broken", "defective"],
    "content": "If you received the wrong item, damaged goods, or missing items, contact support within 7 days with photos and your order number. We'll send a replacement or issue a full refund. Return shipping is free for our errors. Keep all packaging until the issue is resolved.",
    "related": ["order_tracking", "refund_policy", "returns_exchanges"],
    "examples": [
      "I received the wrong item",
      "My order is damaged",
      "Something is missing from my order"
    ]
  },
  {
    "id": "returns_exchanges",
    "category": "shipping",
    "title": "Returns and Exchanges",
    "keywords": ["return", "exchange", "send back", "return policy", "swap", "replace item"],
    "content": "Returns are accepted within 30 days of delivery. Items must be unused and in original packaging. To initiate a return, go to Orders > Return Item or contact support. You'll receive a prepaid return label via email. Refunds are processed within 5-7 business days after we receive the return. Exchanges follow the same process.",
    "related": ["refund_policy", "order_issues"],
    "examples": [
      "How do I return an item?",
      "Exchange for different size",
      "Return policy"
    ]
  },
  {
    "id": "technical_support",
    "category": "support",
    "title": "Technical Support",
    "keywords": ["technical issue", "bug", "not working", "error", "broken", "problem", "technical help", "support"],
    "content": "For technical issues, first try clearing your browser cache and cookies, or restart the app. Check our Status Page for any ongoing outages. If the problem persists, contact support with: (1) Description of the issue, (2) Steps to reproduce, (3) Screenshots if applicable, (4) Device and browser information. Response time is typically within 24 hours.",
    "related": ["contact_support", "app_troubleshooting"],
    "examples": [
      "Something isn't working",
      "I found a bug",
      "Technical problem"
    ]
  },
  {
    "id": "app_troubleshooting",
    "category": "support",
    "title": "App Troubleshooting",
    "keywords": ["app not working", "app crash", "app error", "mobile app", "app problem", "app won't open"],
    "content": "If the app isn't working: (1) Close and restart the app, (2) Update to the latest version, (3) Clear app cache in device settings, (4) Uninstall and reinstall if needed. Make sure you're running iOS 14+ or Android 10+. Your data is saved to your account and won't be lost.",
    "related": ["technical_support"],
    "examples": [
      "App keeps crashing",
      "Mobile app not opening",
      "App won't load"
    ]
  },
  {
    "id": "contact_support",
    "category": "support",
    "title": "Contact Support",
    "keywords": ["contact", "support", "help", "customer service", "reach out", "get help", "talk to someone", "support email", "support phone"],
    "content": "Contact our support team at support@company.com or through the Help Center chat (bottom-right corner). Email response time is 24 hours. Chat support is available Monday-Friday 9 AM - 6 PM EST. For urgent issues, mark your email as 'Urgent'. Include your account email and order number for faster assistance.",
    "related": ["technical_support"],
    "examples": [
      "How do I contact support?",
      "Talk to customer service",
      "Get help"
    ]
  },
  {
    "id": "data_privacy",
    "category": "legal",
    "title": "Data Privacy and Security",
    "keywords": ["privacy", "data", "security", "personal information", "data protection", "GDPR", "how data used"],
    "content": "We take your privacy seriously. Your personal data is encrypted and never sold to third parties. You can view, download, or delete your data anytime in Settings > Privacy. We comply with GDPR and CCPA regulations. Read our full Privacy Policy at company.com/privacy for details on data collection and usage.",
    "related": ["account_deletion"],
    "examples": [
      "How is my data used?",
      "Privacy policy",
      "Data security"
    ]
  },
  {
    "id": "business_hours",
    "category": "general",
    "title": "Business Hours",
    "keywords": ["hours", "open", "closed", "when open", "operating hours", "business hours", "available"],
    "content": "Our support team is available Monday-Friday 9 AM - 6 PM EST. The platform is available 24/7. Email support (support@company.com) is monitored during business hours with responses within 24 hours. Urgent issues are prioritized.",
    "related": ["contact_support"],
    "examples": [
      "What are your hours?",
      "When are you open?",
      "Business hours"
    ]
  }
];