stage('Test') {
  steps {
    sh '''
      echo "Running tests..."
      npm test
    '''
  }
}
