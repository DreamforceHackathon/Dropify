Rails.configuration.stripe = {
  :publishable_key => (ENV['PUBLISHABLE_KEY'] || "pk_test_OXggGkyASwqO57cBS14ufi9K"),
  :secret_key      => (ENV['SECRET_KEY'] || "sk_test_939Pt6SjQ2WwGdpkoqtNUW1c")
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]