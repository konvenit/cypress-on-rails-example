# cypress-on-rails-example

This is a very simple example on how to use the [cypress-on-rails](http://github.com/konvenit/cypress-on-rails) gem.

## Setup
```
bundle install
yarn install
RAILS_ENV=test rails db:migrate
```

## Usage
After setup run this command:
```
bundle exec cypress
```

This will open the cypress.io UI where you can run the included test.

## What to look at
The interesting files are in `spec/cypress`
