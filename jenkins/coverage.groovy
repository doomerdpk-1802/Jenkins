stage('Coverage') {
  steps {
    sh '''
      yarn test:coverage
    '''
  }
}
